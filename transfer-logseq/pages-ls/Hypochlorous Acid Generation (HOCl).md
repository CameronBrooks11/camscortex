- # Overview
	-
- # Plan
- ## Base system
	- Undergrad publication.
	- Moreso taking the basic science and applying it to synthesize HOCl.
	- The base system that works to produce HOCl.
	- Primary design criteria
		- Produces HOCl at ???ppm
-
- ## Production system
	- Subject of #[[Accelerated Masters]].
	- Scratch
		- Production version
		- All certifications: general, medical, electrical...
		- Highly reliable
		- Commercial-type design
		- Rugged for extreme environments
- # Scratch
	- Delegation
	- Lit review
	- MP assembly
	- Will move when sink is done
	- Work in summer alongside business aspect
	- Calcs
	- Sharing of electrodes between channels
-
- # Delegation
	- Apoorv help with electrodes
	- Kimea/Nima help with AI
- # Tasks
	- DONE Figure it out
	  SCHEDULED: <2023-02-18 Sat>
- # Term List
	- [[Overpotential]] [[@Overpotential]] Wikipedia
	  collapsed:: true
		- In electrochemistry, overpotential is the potential difference (voltage) between a half-reaction's thermodynamically determined reduction potential and the potential at which the redox event is experimentally observed
		- The term is directly related to a cell's voltage efficiency
		- [[Activation overpotential]]
			- Potential difference above the equilibrium value required to produce a current that depends on the activation energy of the redox event
			- [[Reaction overpotential]]
				- Type of activation overpotential that specifically relates to chemical reactions that precede electron transfer
				- Can be reduced or eliminated with the use of electrocatalysts
		- [[Concentration overpotential]]
			- Spans a variety of phenomena that involve the depletion of charge-carriers at the electrode surface
			- The "[[diffusion overpotential]]" can refer to a concentration overpotential created by slow diffusion rates as well as "polarization overpotential", whose overpotential is derived mostly from activation overpotential but whose peak current is limited by diffusion of analyte
			- The potential difference is caused by differences in the concentration of charge-carriers between bulk solution and the electrode surface
				- It occurs when electrochemical reaction is sufficiently rapid to lower the surface concentration of the charge-carriers below that of bulk solution
					- The rate of reaction is then dependent on the ability of the charge-carriers to reach the electrode surface
			- [[Bubble overpotential]]
				- A specific form of concentration overpotential
				- Due to the evolution of gas at either the anode or cathode
				- This reduces the effective area for current and increases the local current density
		- [[Resistance overpotential]]
			- Those tied to a cell design
			- These include "junction overpotentials" that occur at electrode surfaces and interfaces like electrolyte membranes
			- They can also include aspects of electrolyte diffusion, surface polarization (capacitance) and other sources of counter electromotive forces
	- [[Tafel equation]] [[@Tafel equation]] Wikipedia
	  collapsed:: true
		- The Tafel equation is an equation in electrochemical kinetics relating the rate of an electrochemical reaction to the overpotential
		- The Tafel equation is an approximation of the Butler-Volmer equation in the case of {|ɳ| > 0.1V}
- # Reading List
  collapsed:: true
	- [[@Electrochemical Methods. Fundamentals and Applications]]
		- {{embed ((63f40d28-2858-47bd-96e7-e734ae4d3071))}}
	- [[@Microelectronic Circuits]]
		- {{embed ((63f40f36-dd63-41fa-9957-a079a5c89dd5))}}
- # Design
	- [HOCl Design Map](logseq://graph/Logseq?page=HOCl%20Design%20Map)
	- ### Design Items
		- Fluid (Blue)
			- Container of Aqueous HOCl
			  id:: 63f2cfb1-fa90-491d-804c-c242aec59fe8
			- Container of Aqueous HOCl
			  id:: 63f2cc03-164d-41ea-ba56-62fca12cd656
			- Container for Liquid Catholyte
			  id:: 63f2cf45-5cf7-4629-8ff5-a4c782f3e1b1
			- Container for Gaseous Catholyte
			  id:: 63f2cf47-3ba0-44f8-a722-54f5b24e6e4b
			- Pump
			  id:: 63f2cc84-502f-4450-bcc2-f61a8ceacf40
			  collapsed:: true
				- Designing new
					- Solenoid operated micropumps
				- Existing designs
					- [[@A low-cost push–pull syringe pump for continuous flow applications]]
				- Products
					- [Cole Parmer - Spex VapLock™ Self-Priming Micro Pump, 20 µL, POM/PTFE/FKM; 24 VDC](https://www.coleparmer.ca/i/spex-vaplock-self-priming-micro-pump-20-l-pom-ptfe-fkm-24-vdc/1202205)
					- [Cole-Parmer VP-200 Vacuum/Pressure Pump, Diaphragm, Single Head, 0.6 cfm, 115 VAC](https://www.coleparmer.ca/i/cole-parmer-vp-200-vacuum-pressure-pump-diaphragm-single-head-0-6-cfm-115-vac/0753240)
					- [MICROPUMP - GA Series](https://micropump.com/products/pumps/ga-series?language_code=en)
					- [MICROPUMP - GAH Series](https://micropump.com/products/pumps/gah-series?language_code=en)
			- Milifluidic channels
			  id:: 63f2cd3e-6f56-401d-bdcb-2406d6e0e5a9
			- Flexible tubing
			  id:: 63f2ce72-1156-417c-b0df-e04928207704
			- Liquid-Gas Splitter
			  id:: 63f2cf3a-c1ad-4787-a118-1a0028d1b35a
		- Actuators (Red)
		  collapsed:: true
			- Electrodes
			  id:: 63f2cd97-421b-4afe-a78d-dbdc5b3f62bb
		- Sensors (Pink)
		  collapsed:: true
			- Flow monitor
			  id:: 63f2cea5-92a1-4604-865d-0de12f46e06b
		- Electrical (Orange)
		  collapsed:: true
			- Microcontroller
			- Potentiostat Circuit
			- Electrode Connection
			  id:: 63f2cdfa-9977-4b0d-9d81-5f2fe4edbc36
			- Flow Sensor Driver Circuit
			  id:: 63f2d06c-286a-4174-b88d-e59f975ceb74
- # HOCl Literature Review
	- [Appropedia Project Page](https://www.appropedia.org/Literature_Review:_Open_Source_Hypochlorous_Acid_Generator)
	- ## Items to Investigate (ongoing)
	  collapsed:: true
		- Systems using electrolysis cells that are manufactured from lower quality alloys will deteriorate quickly and may not be generating hypochlorous acid. If the electrolysis cell is made from steel or other lower grade metals, the electrolysis cell will deteriorate very quickly and will generate harmful chromium compounds that can be carcinogenic.
		- A system with a small electrolysis cell relative to the volume of the container will require a higher amount of salt to reach a certain ppm
		- Causes solution salinity to be extremely high and most likely the system is generating sodium hypochlorite (NaOCl) and NOT hypochlorous acid (HOCl)
		- HOCl has a relatively short shelf life when compared to other commercial disinfectants
		- Type of salt needs to be iodine free?
		- Optimal ppm?
	- ## Market Review
	  collapsed:: true
		- |**Company**|**Price (CAD)**|**Product Specs**|**Patent/Design**|**Name & Link**|
		  |--|--|--|--|--|
		  |EWCO Store|300|-EC = Electrolysis Cell[:br]-EC Electrodes: Titanium[:br]-EC Lifespan: 3,000 8 min. cycles[:br]-Power Supply: 110V/220V, 50/60Hz [:br]-Dimensions: 21 x 15 x 36 cm[:br]-Weight: 0.6 kg (1.3 lbs.)[:br]Volume: 1L |*WIP*| [ecoone](https://store.ewco.com/ecoone ) |
		  |Liberty Sprayers||-Electrode: Mesh Titanium/Iridium/Platinum Coated Alloy[:br]-Power Supply: AC adaptor North American Plug [:br]-Weight: 3-4 lbs |*WIP*| [Premium 2L HOCL Generator](https://www.libertysprayers.com/products/hypochlorous-acid-generator ) |
		  |Liberty Sprayers||-Electrode: coil style platinum/titanium alloy [:br]-Power Supply: AC adaptor North American Plug [:br]-Weight: 3-4 lbs |*WIP*| [Standard 2 Liter HOCl Generator](https://www.libertysprayers.com/products/hypochlorous-acid-generator ) |
		  |Force of Nature|70|-Shipping Weight: 0.86 kg (1.9 lbs.)[:br]-Product Dimensions: 33.0 x 21.6 x 8.9 cm (13.0 x 8.5 x 3.5 in)[:br]-Activator Base: 21.6 x 7.6 x 10.8 cm (8.25 x 3.0 x 4.25 in)[:br]-Volume: 0.35L[:br]-Forced to buy their capsules that contain salt and vinegar[:br]-EPA registered Hospital disinfectant [:br]-EPA’s List N (approved for use against SARS-CoV-2) |*WIP*| [HOCl Generator](https://www.forceofnatureclean.com/shop/force-of-nature-starter-kit-b2/ ) |
		  |Egret Lab Canada|250|-Electrolysis Cell: Titanium [:br]-Shipping Weight: 0.90 kg (1.98 lbs.) [:br]-Product Dimensions: 31.8x10.1x24cm [:br]-Volume: 0.800L[:br]-Body Materials: ABS/TPR/PC [:br]-Battery: 1200mAh/13.32Wh[:br]Rated voltage: DC 11.11v[:br]-Charging V: 5v-2A |*WIP*| [HOCl Generator](https://www.egretlab.ca/products/egret-eo-blaster ) |
	- ## Hypochlorous Acid
		- [[@Hypochlorous acid]] Wikipedia
		- [[@Hypochlorous Acid: A Review]]
		- [[@The Potential Use of Hypochlorous Acid and a Smart Prefabricated Sanitising Chamber to Reduce Occupation-Related COVID-19 Exposure]]
		- [[@Hypochlorous acid and its pharmacological antagonism: An update picture]]
		- [[@Growth of Escherichia coli in Model Distribution System Biofilms Exposed to Hypochlorous Acid or Monochloramine]]
		- [[@Hypochlorous acid as a disinfectant for high-risk HPV: Insight into the mechanism of action]]
		- [[@Inactivation of Prions and Amyloid Seeds with Hypochlorous Acid]]
	- ## Exchange Membrane Electrolyzers
		- [[@Electrolysis]] LibreChem Textbooks
		- [[@An experimental investigation of bubble-induced free convection in a small electrochemical cell]]
	- ## Membraneless Electrolyzers
		- [[@Framework for evaluating the performance limits of membraneless electrolyzers]]
		- [[@A versatile and membrane-less electrochemical reactor for the electrolysis of water and brine]]
		- [[@A membrane-less electrolyzer for hydrogen production across the pH scale]]
	- ## Hypochlorite Production
		- [[@Optimization of hypochlorous acid generation by HCl electrolysis through response surface methodology and artificial neural networks]]
		- [[@Electrolyzed water as a disinfectant: A systematic review of factors affecting the production and efficiency of hypochlorous acid]]
		- [[@Developing chlorine-based antiseptic by electrolysis]]
		- [[@An on-Site, on-Demand, Medium-Sized Hypochlorous Acid Maker for Covid-19 Control]]
		- [[@An Economic Hypochlorous Acid Maker for Covid-19 Control]]
		- [[@Designing a high-efficiency hypochlorite ion generation system by combining cation exchange membrane aided electrolysis with chlorine gas recovery stream]]
		- [[@Electrochemical water disinfection Part I: Hypochlorite production from very dilute chloride solutions]]
		- [[@Electrochemical water disinfection. Part II: Hypochlorite production from potable water, chlorine consumption and the problem of calcareous deposits]]
		- [[@Electrochemical water disinfection Part III: Hypochlorite production from potable water with ultrasound assisted cathode cleaning]]
	- ## Electrical System
		- ### Potentiostat
			- [[@Development of a low-cost Arduino-based potentiostat]]
			- [[@MYSTAT: A compact potentiostat/galvanostat for general electrochemistry measurements]]
			- [[@PassStat, a simple but fast, precise and versatile open source potentiostat]]
			- [[@Lifting the lid on the potentiostat: a beginner's guide to understanding electrochemical circuitry and practical operation]]
			- [[@A Simplified Microcontroller Based Potentiostat for Low-Resource Applications]]
			- [[@Building a Microcontroller Based Potentiostat: A Inexpensive and Versatile Platform for Teaching Electrochemistry and Instrumentation]]
			- [[@Open-Source Potentiostat for Wireless Electrochemical Detection with Smartphones]]
			- [[@CheapStat: An Open-Source, “Do-It-Yourself” Potentiostat for Analytical and Educational Applications]]
			- [[@DStat: A Versatile, Open-Source Potentiostat for Electroanalysis and Integration]]
			- [[@A Small yet Complete Framework for a Potentiostat, Galvanostat, and Electrochemical Impedance Spectrometer]]
			- [[@SweepStat: A Build-It-Yourself, Two-Electrode Potentiostat for Macroelectrode and Ultramicroelectrode Studies]]
			- [[@ABE-Stat, a Fully Open-Source and Versatile Wireless Potentiostat Project Including Electrochemical Impedance Spectroscopy]]
		- ### Microcontroller
			- [[@Due | Arduino Documentation]] Arduino Due
			- [[@Mega 2560 Rev3 | Arduino Documentation]] Arduino MEGA
			- [[@ESP32-C3 Documentation]] ESP32-C3
			- [[@ESP32-S3 Documentation]] ESP32-S3
	- ## Pump
		- [[@Highly-customizable 3D-printed peristaltic pump kit]]
		- [[@The FAST Pump, a low-cost, easy to fabricate, SLA-3D-printed peristaltic pump for multi-channel systems in any lab]]
		- [[@A low-cost push–pull syringe pump for continuous flow applications]]
		- [[@Ender3 3D printer kit transformed into open, programmable syringe pump set]]
		- [[@Syringe pumps]] #OSF
		- [[@Flui.Go Pump]] #OSF
		- [[@Impeller and Pump Design]] #OSF
	- ## Electrodes
		- [[@Ag/AgCl microelectrodes with improved stability for microfluidics]]
		- [[@3D printed flow plates for the electrolysis of water: an economic and adaptable approach to device manufacture]]
	- ## Measurement and Validation
		- ### Electrochemical Impedance Spectroscopy
			- [[@Electrochemical Impedance Spectroscopy (EIS)]]
		- ### Misc
			- pH can be used to determine the concentration of the various solution components
				- Take product and send to chemistry lab to be spectrometrically analyzed at different pH
				- Acetic acid can be used to decrease pH
				- pH sensor can be built into the device to allow for real-time pH monitoring from which concentration estimates can be made
					- pH can be kept within the range through the incremental addition of acetic acid in the form of white vinegar
					- If this is done then it must account for how much vinegar is in the solution and alter the concentration estimates of HOCl
			- Concentration must be kept above certain threshold to be effective against pathogens
				- Stabilized HOCl demonstrates broad-spectrum antimicrobial activity at concentrations ranging from 0.1 to 2.8 μg/mL
	- ## Future Applications
		- ### Clean Hydrogen Production
			- [[@Design and analysis of a combined floating photovoltaic system for electricity and hydrogen production]]
		- ### Medical Intervention
			- [[@Hypochlorous Acid as a Potential Wound Care Agent]]