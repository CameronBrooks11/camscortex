# Flow vs Extrusion Multiplier in slic3r

Specifically looking at Prusa MK3S 0.95 Flow vs. PrusaSlicer Extrusion Multiplier

## Summary

On the Prusa MK3S, the LCD screen often shows a **default flow rate of 95%**, which is set via a G-code command (`M221 S95`) in the printer profile's **Start G-code**. In PrusaSlicer, the **extrusion multiplier** (under _Filament Settings → Filament_) controls the amount of filament extruded during slicing. These two values are **multiplicative**, meaning both affect the final extrusion volume.

- **Flow Rate (`M221`)**: Runtime adjustment of extrusion amount, set on the printer or via G-code.
- **Extrusion Multiplier**: Slicing-time adjustment set in PrusaSlicer per filament profile.

Example:

- Extrusion multiplier = `1.05`
- Flow rate = `0.95`
- Effective extrusion = `1.05 × 0.95 = 0.9975` → ~99.75%

## Why 95%?

The `M221 S95` command is included in the default start G-code:

```c
M221 S{if layer_height<0.075}100{else}95{endif}
```

This was historically used to counter over-extrusion observed in early versions of Slic3r, PrusaSlicer's predecessor [1].

## References

[1] [Prusa3D Forum: Why is flow set to 95% as standard?](https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-hardware-firmware-and-software-help/why-is-flow-set-to-95-as-standard/)

[2] [Prusa3D Help: Extrusion Multiplier Calibration](https://help.prusa3d.com/article/extrusion-multiplier-calibration_2257)

[3] [Prusa3D Forum: ISO Flow Setting](https://forum.prusa3d.com/forum/prusaslicer/iso-flow-setting/)

[4] [Prusa3D Forum: Extrusion Multiplier vs Flow](https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-general-discussion-announcements-and-releases/extrusion-multiplier-vs-flow/)
