# Windows Subsystem for Linux

Windows Subsystem for Linux (WSL) is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows 11. WSL2 is the second iteration, introducing significant improvements over WSL1 by utilizing a real Linux kernel running in a lightweight virtual machine.

## Architecture

WSL2 runs a lightweight VM with a real Linux kernel, unlike WSL1's translation layer. This provides full system call compatibility and better I/O performance for Linux filesystems. The VM uses a dynamic memory allocation scheme and shares network namespace with Windows by default.

## Key Differences from WSL1

- Full syscall compatibility via real kernel
- Native ext4 filesystem performance
- Docker/systemd support
- Slightly higher memory footprint
- Network operates through virtual switch (can complicate localhost scenarios)

## Essential Commands

**Distribution management:**

- `wsl --list --verbose` - Show installed distros with WSL version
- `wsl --set-version <distro> 2` - Convert distro to WSL2
- `wsl --set-default-version 2` - Set WSL2 as default for new installs
- `wsl --shutdown` - Stop all running distros and the VM
- `wsl --terminate <distro>` - Stop specific distro

**Instance control:**

- `wsl -d <distro>` - Launch specific distro
- `wsl --export <distro> <file.tar>` - Backup distro
- `wsl --import <distro> <location> <file.tar>` - Restore distro

## File System Access

**From Windows to Linux:** Use `\\wsl$\<distro>\` or `\\wsl.localhost\<distro>\` UNC paths. Network performance overhead applies.

**From Linux to Windows:** Mount at `/mnt/c`, `/mnt/d`, etc. Cross-filesystem operations are slow due to 9P protocol overhead.

**Performance rule:** Keep project files on the same filesystem where they'll be accessed. Linux tools on Linux FS, Windows tools on Windows FS.

## Configuration (.wslconfig)

Located at `%USERPROFILE%\.wslconfig` (affects all WSL2 distros):

```ini
[wsl2]
memory=8GB
processors=4
swap=2GB
localhostForwarding=true
```

Requires `wsl --shutdown` to take effect.

## Networking Considerations

- WSL2 uses NAT by default with its own IP address
- `localhost` forwarding enabled by default for convenience
- Port forwarding may be needed for external access
- Get WSL IP: `ip addr show eth0`
- Access Windows host from WSL: Use `$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')`

## systemd Support

Enable in `/etc/wsl.conf`:

```ini
[boot]
systemd=true
```

Restart distro with `wsl --terminate <distro>` to activate.

## Docker Integration

WSL2 is the recommended backend for Docker Desktop on Windows. Alternatively, run Docker directly in WSL2 with systemd enabled for a native Linux Docker experience.

## Performance Optimization

- Use Linux filesystem for Linux workloads
- Disable Windows Defender real-time scanning for WSL2 directories if needed
- Use `.wslconfig` to limit resource usage
- Consider sparse VHD cleanup: `wsl --manage <distro> --set-sparse true`

## Common Issues

**Slow filesystem access:** Crossing filesystem boundaries is expensive. Relocate files to native filesystem.

**Network connectivity:** VPN software may interfere. Check DNS resolution in `/etc/resolv.conf`.

**Disk space:** WSL2 virtual disk (ext4.vhdx) doesn't automatically shrink. Compact manually or use sparse mode.

**Memory usage:** Dynamic allocation may not release memory promptly. Set explicit limits in `.wslconfig` if needed.
