# Dev Storage Hygiene

Purpose: reclaim disk space from reproducible dev artifacts (caches, builds, package stores) without damaging environments.

Principle: operate in tiers — start safe, escalate only if needed.

---

## Tier 1 — Safe (Cache-only, no risk)

These remove _rebuildable caches only_. Zero impact beyond slower first rebuild.

### Node (npm / pnpm)

`npm cache clean --force`

`pnpm store prune`

---

### Python (pip)

`pip cache purge`

---

### Rust

If `cargo-cache` is installed:
`cargo cache -a`

Otherwise (manual):
`rm -rf ~/.cargo/registry`
`rm -rf ~/.cargo/git`

Windows:
`Remove-Item "$env:USERPROFILE\.cargo\registry" -Recurse -Force`
`Remove-Item "$env:USERPROFILE\.cargo\git" -Recurse -Force`

---

### PlatformIO

`pio system prune -f`

---

### Temp directories

Linux:
`rm -rf /tmp/*`

Windows:
`Remove-Item "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue`

---

## Tier 2 — Safe but rebuild required

Removes local environments / installs that will be reinstalled.

### Node projects

Linux:
`find . -name node_modules -type d -prune -exec rm -rf '{}' +`

Windows (example scoped path):
`Get-ChildItem "repos" -Directory -Recurse -Filter node_modules | Remove-Item -Recurse -Force`

---

### Python virtual environments

Linux:
`find . -name ".venv" -type d -prune -exec rm -rf '{}' +`

Windows:
`Get-ChildItem "repos" -Directory -Recurse -Include .venv,venv | Remove-Item -Recurse -Force`

---

### Build artifacts

Common directories:

- `build/`
- `dist/`
- `out/`
- `target/`
- `.pio/`

Linux:
`find . -type d \( -name build -o -name dist -o -name out -o -name target -o -name .pio \) -prune -exec rm -rf '{}' +`

Windows:
`Get-ChildItem "repos" -Directory -Recurse -Include build,dist,out,target,.pio | Remove-Item -Recurse -Force`

---

## Tier 3 — Toolchain + system-level cleanup

These are safe if you understand the tool, but may remove installed components.

### Docker

Audit:
`docker system df` - this will show disk usage by images, containers, volumes, and build cache. Review output to identify large items.

Cleanup:
`docker system prune -a` - this will remove all stopped containers, unused networks, dangling images, and optionally, all unused images (not just dangling ones). Review output before confirming.

---

### WSL

Inside WSL:
`sudo apt autoremove` - this will remove unused packages, but review output before confirming.
`sudo apt clean` - this will clear the local repository of retrieved package files.

---

### MSYS2

Inside MSYS shell:
`pacman -Qtdq` - this will list all orphaned packages (installed as dependencies but no longer required).

Remove orphans:
`pacman -Rns $(pacman -Qtdq)` - this will remove orphaned packages and their dependencies, but review the list before confirming to avoid removing needed packages.

---

## Tier 4 — Aggressive (manual / selective)

Use only after audit.

### Archive cleanup

Linux:
`find ~/Downloads -type f \( -name "*.zip" -o -name "*.tar" -o -name "*.iso" \)`

Windows:
`Get-ChildItem "$env:USERPROFILE\Downloads" -File | Where-Object { $_.Extension -in ".zip",".iso",".tar" }`

---

## Notes

- All Tier 1 actions are safe to automate.
- Tier 2 should be scoped to project directories.
- Tier 3 should be run intentionally, not blindly.
- Tier 4 requires manual inspection.

---

## Suggested workflow

1. Run Tier 1 periodically
2. If low space → Tier 2 on inactive projects
3. If still constrained → Tier 3 targeted
4. Only then inspect Tier 4
