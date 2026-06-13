# Pioreactor Offline Plugin Install

## Offline Pioreactor plugin upload/install workflow

Use this structure on the **leader Pioreactor**:

```bash
/home/pioreactor/packages/plugins/
```

This is just a clean staging area for installer files. Do **not** put `.whl` files directly in:

```bash
/home/pioreactor/.pioreactor/plugins/
```

That directory is for direct Python plugin files / runtime plugin code, not wheel staging. Pioreactor’s docs describe `.whl` installation separately from the manual drop-in plugins folder. ([Pioreactor Docs][1])

---

## 1. On your internet-connected computer

Download the plugin’s latest `.whl` file from PyPI, GitHub releases, or the plugin author.

Example file:

```text
pioreactor_air_bubbler-0.3.1-py3-none-any.whl
```

Pioreactor’s offline install flow expects a local wheel file and installs it with `pio plugins install <plugin-name> --source <path-to-whl>`. ([Pioreactor Docs][1])

---

## 2. Connect laptop to the Pioreactor local network

Join the same local AP/router network as the Pioreactor cluster.

Open the Pioreactor dashboard or SSH target using either:

```text
http://pioreactor.local
```

or the leader hostname/IP, depending on your network.

---

## 3. Create the staging directory on the leader

SSH into the leader Pioreactor:

```bash
ssh pioreactor@pioreactor.local
```

Create the package staging folder:

```bash
mkdir -p /home/pioreactor/packages/plugins
```

---

## 4. Upload the wheel with WinSCP

In WinSCP:

* Protocol: **SFTP**
* Host: `pioreactor.local` or the Pioreactor IP
* Username: `pioreactor`
* Remote folder:

```text
/home/pioreactor/packages/plugins/
```

Upload the `.whl` file there.

Result:

```text
/home/pioreactor/packages/plugins/plugin_name.whl
```

---

## 5. Install the plugin on the leader

SSH into the leader and run:

```bash
pio plugins install <plugin-name> --source /home/pioreactor/packages/plugins/<wheel-file>.whl
```

Example:

```bash
pio plugins install pioreactor-air-bubbler \
  --source /home/pioreactor/packages/plugins/pioreactor_air_bubbler-0.3.1-py3-none-any.whl
```

The plugin name is usually the package name, while the wheel filename includes version/build tags. Pioreactor’s docs use this same pattern. ([Pioreactor Docs][1])

---

## 6. If installing across a cluster

Upload the wheel to the **leader first**, then distribute it to workers:

```bash
pios cp /home/pioreactor/packages/plugins/<wheel-file>.whl
```

Pioreactor’s docs note that if the wheel is uploaded to the leader, it can be distributed to workers with `pios cp <location of .whl file>`. ([Pioreactor Docs][1])

Then install on the desired Pioreactors using the local `--source` path. Depending on how your cluster commands are set up, you may either run the install per unit or use Pioreactor’s cluster tooling for remote execution.

---

## 7. Restart/reload if needed

After install, check the dashboard’s **Plugins** page and any new automations/jobs the plugin adds. Some plugins may require restarting Pioreactor services or rebooting the unit if the UI or background jobs do not immediately detect them.

---

## Clean mental model

```text
Internet computer
  ↓ download .whl

Laptop on local Pioreactor network
  ↓ WinSCP upload

/home/pioreactor/packages/plugins/
  ↓ pio plugins install --source

Pioreactor-managed plugin install
```

Use:

```text
/home/pioreactor/packages/
```

as the general offline package drop zone.

Use:

```text
/home/pioreactor/.pioreactor/plugins/
```

only for direct Python plugin files or one-off development scripts, not wheel files. Pioreactor explicitly documents that as an alternative manual method. ([Pioreactor Docs][1])

[1]: https://docs.pioreactor.com/user-guide/using-community-plugins?utm_source=chatgpt.com "Using community plugins"
