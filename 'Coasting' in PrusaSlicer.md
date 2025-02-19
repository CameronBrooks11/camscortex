# 'Coasting' in PrusaSlicer

PrusaSlicer lacks Cura's "coasting" feature, but you can achieve a similar effect with these settings:

- **Retraction Length**: Set a non-zero value (e.g., 0.4mm for TPU).
- **Wipe While Retracting**: Enable this option.
- **Retract Amount Before Wipe**: Set to **100%**.

This ensures retraction happens at the end of the print move, reducing blobs and strings.  
For best results, also calibrate **Linear Advance** (e.g., **0.2** for a 0.4mm Revo 6 brass nozzle).
