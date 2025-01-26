# clearance-tolerance-accuracy-precision

Using precise terms improves clarity when specifying dimensions. This is particularly important in the context of languge described models such as those made in OpenSCAD where understanding dimensions and terminology is crucial for defining variables correctly to ensure clear communication of intent.

## Key Terms

- **Tolerance**: Allowed random deviation for a dimension.
- **Allowance**: Planned difference between a nominal and exact value.
- **Clearance**: Intentional space between parts.
- **Interference**: Intentional overlap between parts.
- **Accuracy**: Maximum dimensional variation a machine can achieve; tighter tolerances can't exceed machine accuracy.
- **Precision**: Smallest steps a machine can take, often confused with accuracy.

## Practical Application Example

To design a 5 mm pin and hole:

1. Measure your machine’s accuracy by printing test parts and noting the variation across X, Y, and Z axes. For example, accuracy = ±0.2 mm.
2. Define clearance (e.g., 0.2–1.0 mm acceptable gap).
3. Calculate dimensions considering accuracy and desired clearance:
   - Pin: 5.0 ± 0.2 mm
   - Hole: 5.6 ± 0.2 mm
   - Min clearance: 5.4 mm hole - 5.2 mm pin = 0.2 mm
   - Max clearance: 5.8 mm hole - 4.8 mm pin = 1.0 mm
