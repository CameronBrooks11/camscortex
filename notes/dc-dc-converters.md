# DC-DC Converter

## What is a DC-DC Converter?

- A DC-to-DC converter is an [[electronic circuit]] or [[electromechanical device]] that converts a source of direct current (DC) from one voltage level to another
  - It is a type of [[electric power converter]].
- Power levels range from very low (small batteries) to very high (high-voltage power transmission).
- They can [[step-up]], [[step-down]], and [[invert]].

## Theory of Operation

- Practical electronic converters use switching techniques. Switched-mode DC-to-DC converters convert one DC voltage level to another, which may be higher or lower, by storing the input energy temporarily and then releasing that energy to the output at a different voltage. The storage may be in either magnetic field storage components ([[inductors]], [[transformers]]) or electric field storage components ([[capacitors]]). This conversion method can increase or decrease voltage. Switching conversion is often more power-efficient (typical efficiency is 75% to 98%) than linear voltage regulation, which dissipates unwanted power as heat.
- The [[power switch]] was the key to practical switching regulators, namely the [[Vertical Metal Oxide Semiconductor (VMOS)]] power switch, switching supplies were generally not practical.

- The inductor's main function is to limit the current [[Slew Rate]] through the power switch.
  - This action limits the otherwise high-peak current that would be limited by the switch resistance alone.
  - The key advantage for using an inductor in switching regulators is that an inductor stores energy. This energy can be expressed in Joules as a function of the current by:
    - E = ½ × L × I²
  - The current is 90 degrees out of phase with the voltage. Because of this, the energy is stored and can be recovered in the discharge phase of the switching cycle
- A [[switching regulator]] is a circuit that uses a power switch, an inductor, and a diode to transfer energy from input to output.
  - The basic components of the switching circuit can be rearranged to form a step-down (buck) converter, a step-up (boost) converter, or an inverter (flyback).
  - These designs are shown in Figures 1, 2, 3, and 4 respectively, where Figures 3 and 4 are the same except for the transformer and the diode polarity.
    - ![image.png](assets/images/image_1674522661649_0.png)

### Charge Phase

- A basic boost configuration is depicted in Figure 5.
  - ![image.png](assets/images/image_1674523808706_0.png)
- Assume the switch has been open for a long time:
  - The voltage drop across the diode is negative
  - The voltage across the capacitor is equal to the input voltage
- When the switch closes, the input voltage, +V*{IN}, is impressed across the inductor and the diode prevents the capacitor from discharging +V*{OUT} to ground.
  - Because the input voltage is DC, current through the inductor rises linearly with time at a rate proportional to the input voltage divided by the inductance.

### Discharge Phase

- Figure 6 shows the discharge phase.
  - ![image.png](assets/images/image_1674524086405_0.png)
- When the switch opens again, the inductor current continues to flow into the [[rectification diode]] to charge the output. As the output voltage rises, the slope of the current, di/dt, though the inductor reverses. The output voltage rises until equilibrium is reached or:
  - V\_{L} = L \* di/dt
    - In other words, the higher the inductor voltage, the faster the inductor current drops.
  - In a steady-state operating condition, the average voltage across the inductor over the entire switching cycle is zero.
    - This implies that the average current through the inductor is also in steady state.
      - This is an important rule governing all inductor-based switching topologies.
  - Furthermore, we can establish that for a given charge time (switch closed), t*{ON}, and a given input voltage and with the circuit in equilibrium, there is a specific discharge time (switch open), t*{OFF}, for an output voltage.
  - During the charge period t*{ON} the voltage across the inductor V*{L,ON} is equal to the input voltage, V\_{IN}.
    - Because the average inductor voltage in steady state must equal zero, we can calculate for the boost circuit:
      - V*{L,ON} \* t*{ON} = V*{L,OFF} \* t*{OFF}
        - When we substitute V*{IN} for V*{L,ON} we get:
      - V*{IN} \* t*{ON} = V*{L,OFF} \* t*{OFF}
        - Since V*{OUT} = V*{IN} + V\_{L}, we get:
      - V*{OUT} = V*{IN} \* (1+t*{ON}/t*{OFF})
        - The relationship for duty cycle is given by: D = t*{ON}/(t*{ON} + t\_{OFF})
      - V*{OUT} = V*{IN}/(1-D) is the relationship for the boost configuration
    - A similar derivation can be applied for the buck configuration:
      - V*{OUT} = V*{IN}\*D
    - A similar derivation can be applied for the inverter (flyback) configuration:
      - V*{OUT} = V*{IN}\*D/(1-D)

## Advantages and Disadvantages

### Advantages

- Switching regulators offer three main advantages compared to linear regulators:
  - Switching efficiency can be much better.
  - Because less energy is lost in the transfer, smaller components and less thermal management are required.
  - The energy stored by an inductor in a switching regulator can be transformed to output voltages that can be greater than the input (boost), negative (inverter), or can even be transferred through a transformer to provide electrical isolation with respect to the input (Figure 4).

### Disadvantages

- They can be noisy.
- Require energy management in the form of a control loop.
  - Fortunately, the solution to these control problems is integrated in modern switching-mode controller chips.

## References

- https://www.analog.com/en/technical-articles/dc-to-dc-buck-converter-tutorial.html



[switching regulator]: <switching regulator> "Switching Regulator"


[Slew Rate]: <Slew Rate> "Slew Rate"