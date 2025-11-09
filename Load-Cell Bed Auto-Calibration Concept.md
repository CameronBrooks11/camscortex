### Load-Cell Bed Auto-Calibration Concept — Evaluation

**Verdict:** Obsolete.  
Modern printers (e.g. Prusa MK4, Core One) use _nozzle-mounted_ load cells, not bed-mounted arrays.

**Issues with bed-mounted load cells:**

- High noise from motion, vibration, and thermal drift
- Complex force interpretation across multiple sensors
- Bed flex and mounting tolerances dominate signal
- Increased firmware and calibration complexity

**Modern approach:**

- Single load cell or strain gauge integrated in the hotend path
- Direct nozzle-contact detection enables automatic Z-offset and mesh calibration
- Higher repeatability, lower mechanical uncertainty

**Conclusion:**  
Bed-mounted load-cell calibration is academically interesting but practically obsolete.  
Focus on nozzle-path force sensing for reliable automation.
