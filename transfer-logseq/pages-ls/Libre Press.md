- # Overview
	- Libre Press Mini 1000
	- Libre Press Large
	- Libre Press TC
- # Scratch
	- Variable number of plugs
	- Use it as a power press for sheet metal (might already be in works)
- # Quick
	- [OSF: Open source cold and hot scientific sheet press](https://osf.io/wqne2/)
	- Big press specs
		- Mechanical specs
		  collapsed:: true
			- Lattice squares: 9"x9" (d:12.73, lower), 9"x9.13" (d:12.82, lower top edge), 9.3"x9.3"(d:13.15)
			  collapsed:: true
				- If A is the square side length, B is the heater length, and C is the heater width then:
				  collapsed:: true
					- {{renderer :luckysheet, workbook@1677510599244}}
					-
				- Lower: 36 squares (6 by 6)
				- Upper: 25 full, 12+4 half (approx 36)
			- Plate drawings
				- ![lower_platen.JPG](../assets/lower_platen_1677509390196_0.JPG){:height 319, :width 310}
				  ![upper_platen.JPG](../assets/upper_platen_1677509408871_0.JPG){:height 286, :width 315}
		- Electrical specs
		  collapsed:: true
			- 120V, 15A, 2 outlets, 10% safety = 3240W, 1620W per side
				- 3240/72 = 45W
			- 240V, 25A, 2 outlets, 10% safety = 10800W, 5400W per side
				- 10800/72 = 150W
			- Look to order 80
	- Mini press specs
	  collapsed:: true
		- 250 W * 4 * 2
- # #Sourcing
  collapsed:: true
	- Large Press Heaters
		- DONE [#A] Source heaters
		  SCHEDULED: <2023-02-24 Fri>
		- Flat Heater Quote Resources
		- Quotes: find all sizing requirements and power specs to add to quote email asking  for advice
			- [Watlow - 375 High-Temperature Strip Heaters](https://www.watlow.com/Products/Heaters/Strip-Heaters/375-High-Temperature-Strip-Heaters)
			  collapsed:: true
				- 1-800-928-5692
				- ![STL-375S-0413.pdf](../assets/STL-375S-0413_1677345489513_0.pdf)
			- [Chromalox -  Strip and Ring Heaters](https://www.chromalox.com/en/Catalog/Component-Technologies/strip-and-ring-heaters)
			  collapsed:: true
				- Particularly the ring heaters and mica strip heaters
				  collapsed:: true
					- https://www.chromalox.com/en/catalog/component-technologies/strip-and-ring-heaters/ring-heaters
					- https://www.chromalox.com/en/catalog/component-technologies/strip-and-ring-heaters/mica-strip-heaters
				- 1-800-443-2640
				- 1" 8" 150W 240V T1 NS HSE08A01A-00002
				- Type T1 or Type XX
				- Will get email
			- [tempco - mica strip and ring](https://www.tempco.com/Tempco/Products/Electric-Heaters-and-Elements/Strip-Heaters.htm)
			  collapsed:: true
				- 630.350.2252
				  collapsed:: true
					- https://www.tempco.com/Products/Electric-Heaters-and-Elements/Cast-In-Heaters/Cast-In-Ring-Heaters.htm
					- https://www.tempco.com/Products/Electric-Heaters-and-Elements/Cast-In-Heaters/Cast-In-Thermo-Platens.htm
				- Tornado warning?
				- CALL THEM BACK
			- [WATTCO - strip heaters](https://www.wattco.com/product_category/strip-heaters/ )
				- 1-866-577-6172
				- Specs told: 240V, 150W, 10"L, 1.5"W
				- Will get email
			- [PROCESS HEATERS - mica strip heaters](https://www.processheaters.ca/web/control.php?category=Heaters&sub_category=Strip%20Heaters)
				- 1-877-747-8250
				- Harry sales rep
				- Specs told: 240V, 150W, 10"L, 1.5"W
				- Will get email
- # #BOMs
	- [RH BOMs Folder](file://G:\FAST Research Group\Resistive Heating Projects\RH BOMs)
- # Tasks
	- DONE Source parts BOM
	  SCHEDULED: <2023-02-24 Fri>
	- DONE [#A] Software minimum viable product (MVP)
	  SCHEDULED: <2023-01-22 Sun>
	  :LOGBOOK:
	  CLOCK: [2023-01-27 Fri 18:47:38]--[2023-01-27 Fri 18:47:39] =>  00:00:01
	  :END:
	- DONE [#A] Mini press testing
	  SCHEDULED: <2023-01-24 Tue>
- # Literature Review
  collapsed:: true
	- ## Background
	  collapsed:: true
		- The typical end of life for plastic sees large volumes of 
		  thermoplastics being directed to landfill or incinerated as an 
		  alternative to recycling or reuse. This is typically due to the high 
		  cost of sorting and prepared waste plastic prior to use in available 
		  processing methods.
		- Compression molding is a low cost, large volume plastic molding 
		  process that requires the least rigid preparation requirements for the 
		  waste plastic it uses. Compression molding is a type of thermoforming 
		  that utilizes pressure and heat to form thermoplastics around a mold and
		   into the desired shape. As a result, the applications are exclusively 
		  limited to the mold used and can involve profiled molds on an 
		  application specific basis to produce final components, or large sheets 
		  that can be subject to post processing for supplementary product 
		  development.
		- To monopolize on the versatility of compression molding and 
		  divert waste plastic from landfills, a large scale North American 
		  (Imperial) standard sheet press is desired. Scale is dictated by 
		  parallel Solar Product research and development, and the dimensional 
		  standard by market availability.
	- ## Search Terms
	  collapsed:: true
		- "Plastic" AND "Sheet Press"
		- "Thermoforming"
		- "Compression Molding"
		- "Plastic Processing"
	- ## Resistive Heating Control
	  collapsed:: true
		- [[@Design of Heating System Controlled by Arduino]]
		- [[@An Arduino-based Low-Cost Hardware for Temperature Control]]
	- ## Compression Moulding
	  collapsed:: true
		- [[@Potential for Reuse of E-Plastics through Processing by Compression Molding]]
		- [[@Modeling and Optimization of a Plastic Thermoforming Process]]
		- [[@What is Thermoforming and How Can the Process be Used in Product Manufacturing?]]
		- [[@Guide to Compression Molding From Prototyping to Mass Production]]
	- ## Sheet Press
	  collapsed:: true
		- [[@Build a Sheetpress]] Precious Plastic
		- [[@A Plastic Plate Press: A locally producible plastic plate press for bottom-up recycling in low-resource settings]] TUDelft
		- [[@Heat Press Machine]]
		- Automated P2 Plant https://www.youtube.com/watch?v=1SqvGCVatjI
	- ## Material Science