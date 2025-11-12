# RocketPy Pull Request - October 8th, 2025

## Relevant Links

- [Setting Up Development Environment - RocketPy](https://docs.rocketpy.org/en/latest/development/setting_up.html)
- [Building Documentation - RocketPy](https://docs.rocketpy.org/en/latest/development/build_docs.html)
- [Testing Guidelines - RocketPy](https://docs.rocketpy.org/en/latest/development/testing.html#testing-guidelines)
- [Importing KML into Google Earth](https://developers.google.com/maps/documentation/earth/import-kml?platform=computer)
- [Blue Raven GPS Path KML (Google Earth)](https://earth.google.com/earth/d/1eLTHW1dv4Et6da6tUtY53LY0Pv57In8v?usp=sharing)
- [RocketPy Monte Carlo Path KML (Google Earth)](https://earth.google.com/earth/d/1dDPIkTJRUqqHgPBFt9Ajao4MbCLVWSIP?usp=sharing)

<!-- Below is the PR that was submitted on October 8th, 2025 at: https://github.com/RocketPy-Team/RocketPy/pull/845-->
<!-- You are awesome! Your contribution to RocketPy is fundamental in our endeavour to create the next generation solution for rocketry trajectory simulation! -->

## Pull request type

- **Code maintenance** (refactoring, formatting, tests)

## Checklist

- [x] Tests for the changes have been added (if needed)
- [x] Docs have been reviewed and added / updated
- [x] Lint (`black rocketpy/ tests/`) has passed locally
- [x] All tests (`pytest tests -m slow --runslow`) have passed locally
- [x] `CHANGELOG.md` has been updated (if relevant)

## Current behavior

Export routines for `Flight` live as instance methods in `rocketpy/simulation/flight.py` (`export_data`, `export_pressures`, `export_sensor_data`, `export_kml`). This mixes simulation with I/O concerns and forces an import-time dependency on `simplekml` for users who do not export.

## New behavior

- Extracted exporters into a new class `FlightDataExporter` at `rocketpy/simulation/flight_data_exporter.py`.
- Added deprecation wrappers on `Flight` methods that delegate to `FlightDataExporter` and emit `DeprecationWarning` with migration guidance.
- Re-exported `FlightDataExporter` in `rocketpy/simulation/__init__.py`.
- No functional changes to outputs or signatures aside from deprecation.
- Deprecation schedule: wrappers remain until `v1.12.0`.
- Migration example:

```
from rocketpy.simulation import FlightDataExporter

exporter = FlightDataExporter(test_flight)
exporter.export_data("out.csv", "angle_of_attack", "mach_number")
```

## Breaking change

- **No**

## Additional information

- Local runs show deprecation warnings during integration tests where legacy methods are exercised. Example: `Moved to FlightDataExporter.export_data() and will be removed in v1.12.0.`
- Headless plotting for integration tests was configured with `MPLBACKEND=Agg`.
- Formatting-only changes were intentionally excluded from this PR to keep the diff focused on the refactor.
