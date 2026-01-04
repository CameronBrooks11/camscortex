# Ubuntu Linux Installation

Steps:

1. Shut down computer
2. Power back on and repeatedly hit the F2 immediately after power up to enter BIOS
3. Within the BIOS:
   1. Set a supervisor password i.e. `super22`
   2. Enable F12 boot mode
   3. Disable secure boot
4. Repeat step 1 and 2 except hit F12 instead of F2
5. Hit boot from Ubuntu USB (linpus USB)
6. Select try / install Ubuntu
7. Complete the guided setup for Ubuntu
8. When prompted, restart the computer. It will say "remove installation media and press enter". Remove the USB and hit enter.
9. On certain models (such as my Acer Aspire E5), it may not automatically boot into Ubuntu. If this happens:
   1. Repeat step 1 and 2
   2. Reenable secure boot in BIOS
   3. Hit "select UEFI file as trusted for executing"
   4. Navigate to `HDD/SSD` -> `EFI` -> `ubuntu` -> `grubx64.efi`
10. Save and exit BIOS. Restart and the computer should now boot into Ubuntu.
