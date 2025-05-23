# Determination of the Motion of a Particle

## Overview

    - The motion of a particle is considered known when its position for every value of time \( t \) is known.
    - Often, motion is defined by the type of acceleration the particle has, rather than a direct relation between position \( x \) and time \( t \).

## Types of Acceleration

- 1. **Constant Acceleration**
  - Example: Freely falling body with acceleration due to gravity (e.g., 9.81 m/s² or 32.2 ft/s²).
- 2. **Acceleration Dependent on Elongation**
  - Example: Mass attached to a stretched spring.

## Determination of Position Coordinate \( x \)

- Acceleration \( a \) can be a function of variables \( x \), \( v \), and \( t \).
- Determining \( x \) in terms of \( t \) requires two successive integrations.

## Common Classes of Motion

- 1. **Acceleration as a Function of Time** \(a = f(t) \)
  - Integrating acceleration over time gives velocity.
  - Further integration of velocity with respect to time gives position.
  - Requires initial conditions \( v_0 \) and \( x_0 \) at \( t = 0 \) for unique solution.
- 2. **Acceleration as a Function of Position** \( a = f(x) \)
  - Rearranging and integrating the equation \( v dv = a dx \) yields velocity in terms of position.
  - Further integration is often numerical due to complexity.
- 3. **Acceleration as a Function of Velocity (\( a = f(v) \))**
  - Integrating acceleration with respect to velocity gives either \( v \) in terms of \( t \) or \( x \).
  - Further integration with respect to time or position yields the motion description.

## Particular Cases in Motion

- Uniform motion (\( a = 0 \)) and uniformly accelerated motion (\( a = \text{constant} \)) are important specific cases.
- These cases are often studied for their simplicity and frequent occurrence in physical problems.
