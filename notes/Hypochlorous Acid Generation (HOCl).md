# Hypochlorous Acid Generation (HOCl)

## Plan

### Base system

- Moreso taking the basic science and applying it to synthesize HOCl.
- The base system that works to produce HOCl.
- Primary design criteria
  - Produces HOCl at ???ppm

### Production system

- Scratch
  - Production version
  - All certifications: general, medical, electrical...
  - Highly reliable
  - Commercial-type design
  - Rugged for extreme environments

## Scratch

- Will move when sink is done
- Work in summer alongside business aspect
- Calcs
- Sharing of electrodes between channels

## Term List

- Overpotential (from Wikipedia)

  - In electrochemistry, overpotential is the potential difference (voltage) between a half-reaction's thermodynamically determined reduction potential and the potential at which the redox event is experimentally observed
  - The term is directly related to a cell's voltage efficiency
  - Activation overpotential
    - Potential difference above the equilibrium value required to produce a current that depends on the activation energy of the redox event
    - Reaction overpotential
      - Type of activation overpotential that specifically relates to chemical reactions that precede electron transfer
      - Can be reduced or eliminated with the use of electrocatalysts
  - Concentration overpotential
    - Spans a variety of phenomena that involve the depletion of charge-carriers at the electrode surface
    - The "diffusion overpotential" can refer to a concentration overpotential created by slow diffusion rates as well as "polarization overpotential", whose overpotential is derived mostly from activation overpotential but whose peak current is limited by diffusion of analyte
    - The potential difference is caused by differences in the concentration of charge-carriers between bulk solution and the electrode surface
      - It occurs when electrochemical reaction is sufficiently rapid to lower the surface concentration of the charge-carriers below that of bulk solution
        - The rate of reaction is then dependent on the ability of the charge-carriers to reach the electrode surface
    - Bubble overpotential
      - A specific form of concentration overpotential
      - Due to the evolution of gas at either the anode or cathode
      - This reduces the effective area for current and increases the local current density
  - Resistance overpotential
    - Those tied to a cell design
    - These include "junction overpotentials" that occur at electrode surfaces and interfaces like electrolyte membranes
    - They can also include aspects of electrolyte diffusion, surface polarization (capacitance) and other sources of counter electromotive forces

- Tafel equation (from Wikipedia)

  - The Tafel equation is an equation in electrochemical kinetics relating the rate of an electrochemical reaction to the overpotential
  - The Tafel equation is an approximation of the Butler-Volmer equation in the case of {|ɳ| > 0.1V}

## Design

![HOCl Design Map](<assets/images/HOCl Design Map.png>)

- Fluid (Blue)
  - Container of Aqueous HOCl
  - Container of Aqueous HOCl
  - Container for Liquid Catholyte
  - Container for Gaseous Catholyte
  - Pump
    - Designing new
      - Solenoid operated micropumps
    - Existing designs
      - A low-cost push–pull syringe pump for continuous flow applications
    - Products
      - [Cole Parmer - Spex VapLock™ Self-Priming Micro Pump, 20 µL, POM/PTFE/FKM; 24 VDC](https://www.coleparmer.ca/i/spex-vaplock-self-priming-micro-pump-20-l-pom-ptfe-fkm-24-vdc/1202205)
      - [Cole-Parmer VP-200 Vacuum/Pressure Pump, Diaphragm, Single Head, 0.6 cfm, 115 VAC](https://www.coleparmer.ca/i/cole-parmer-vp-200-vacuum-pressure-pump-diaphragm-single-head-0-6-cfm-115-vac/0753240)
      - [MICROPUMP - GA Series](https://micropump.com/products/pumps/ga-series?language_code=en)
      - [MICROPUMP - GAH Series](https://micropump.com/products/pumps/gah-series?language_code=en)
  - Milifluidic channels
  - Flexible tubing
  - Liquid-Gas Splitter
- Actuators (Red)
  - Electrodes
- Sensors (Pink)
  - Flow monitor
- Electrical (Orange)
  - Microcontroller
  - Potentiostat Circuit
  - Electrode Connection
  - Flow Sensor Driver Circuit

## HOCl Literature Review

- [Appropedia Project Page](https://www.appropedia.org/Literature_Review:_Open_Source_Hypochlorous_Acid_Generator)

### Items to Investigate (ongoing)

    - Systems using electrolysis cells that are manufactured from lower quality alloys will deteriorate quickly and may not be generating hypochlorous acid. If the electrolysis cell is made from steel or other lower grade metals, the electrolysis cell will deteriorate very quickly and will generate harmful chromium compounds that can be carcinogenic.
    - A system with a small electrolysis cell relative to the volume of the container will require a higher amount of salt to reach a certain ppm
    - Causes solution salinity to be extremely high and most likely the system is generating sodium hypochlorite (NaOCl) and NOT hypochlorous acid (HOCl)
    - HOCl has a relatively short shelf life when compared to other commercial disinfectants
    - Type of salt needs to be iodine free?
    - Optimal ppm?

### Market Review

- **Company:** EWCO Store  
  **Price (CAD):** 300  
  **Product Specs:**

  - EC = Electrolysis Cell
  - EC Electrodes: Titanium
  - EC Lifespan: 3,000 8 min. cycles
  - Power Supply: 110V/220V, 50/60Hz
  - Dimensions: 21 x 15 x 36 cm
  - Weight: 0.6 kg (1.3 lbs.)
  - Volume: 1L  
    **Patent/Design:** _WIP_  
    **Name & Link:** [ecoone](https://store.ewco.com/ecoone)

- **Company:** Liberty Sprayers  
  **Price (CAD):** —  
  **Product Specs:**

  - Electrode: Mesh Titanium/Iridium/Platinum Coated Alloy
  - Power Supply: AC adaptor North American Plug
  - Weight: 3-4 lbs  
    **Patent/Design:** _WIP_  
    **Name & Link:** [Premium 2L HOCL Generator](https://www.libertysprayers.com/products/hypochlorous-acid-generator)

- **Company:** Liberty Sprayers  
  **Price (CAD):** —  
  **Product Specs:**

  - Electrode: coil style platinum/titanium alloy
  - Power Supply: AC adaptor North American Plug
  - Weight: 3-4 lbs  
    **Patent/Design:** _WIP_  
    **Name & Link:** [Standard 2 Liter HOCl Generator](https://www.libertysprayers.com/products/hypochlorous-acid-generator)

- **Company:** Force of Nature  
  **Price (CAD):** 70  
  **Product Specs:**

  - Shipping Weight: 0.86 kg (1.9 lbs.)
  - Product Dimensions: 33.0 x 21.6 x 8.9 cm (13.0 x 8.5 x 3.5 in)
  - Activator Base: 21.6 x 7.6 x 10.8 cm (8.25 x 3.0 x 4.25 in)
  - Volume: 0.35L
  - Forced to buy their capsules that contain salt and vinegar
  - EPA registered Hospital disinfectant
  - EPA’s List N (approved for use against SARS-CoV-2)  
    **Patent/Design:** _WIP_  
    **Name & Link:** [HOCl Generator](https://www.forceofnatureclean.com/shop/force-of-nature-starter-kit-b2/)

- **Company:** Egret Lab Canada  
  **Price (CAD):** 250  
  **Product Specs:**
  - Electrolysis Cell: Titanium
  - Shipping Weight: 0.90 kg (1.98 lbs.)
  - Product Dimensions: 31.8x10.1x24cm
  - Volume: 0.800L
  - Body Materials: ABS/TPR/PC
  - Battery: 1200mAh/13.32Wh
  - Rated voltage: DC 11.11v
  - Charging V: 5v-2A  
    **Patent/Design:** _WIP_  
    **Name & Link:** [HOCl Generator](https://www.egretlab.ca/products/egret-eo-blaster)
