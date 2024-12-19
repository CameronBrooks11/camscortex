# Scientific Press Alpha
id:: 65aee54d-f7ee-4a65-a11f-afbb44bc5a69
- *Engineering Design Project Template*
- **Category:** [[Industrial Processing]], [[Material Science]], [[Control Systems]],[[Distributed Recycling and Manufacturing]]
- **Start Date:** July 2022
- **Estimated End Date:** February 2024
- **Milestones:**
	- Paper February 2024
	- Return to v1-Refined January 2024
	- Yukonstruct Build
		- V1 to here transferred to --> [[Scientific Press Beta]]
	- Version 3 September 2023
	- Version 2 March 2023
	- Investigation of induction heating feasibility
		- Not feasible for current project --> [[Scalable Open Induction Heating]]
	- Version 1 January 2023
	- Investigation of manufacturing MgO elements feasibility
		- Not feasible for current project --> [[Custom Resistive Elements]]
	- Working Prototype September 2022
- ## Design Objectives
	- **Objective 1:** Design and validate a miniature version of the precious plastics press for converting waste plastic regrind into high-quality plastic stock (sheets, bricks, etc.) to serve as raw material for construction and manufacturing.
	- **Objective 2:** Create a device that is capable of performing material science studies.
	- **Objective 3:** Provide an openly accessible and thoroughly documented design that can be recreated by the average typical user of the device.
- ## Design Concept and Development
	- **Initial Concept:** A small-scale hot and cold press for scientists to manufacture material science samples to test novel composites, with a focus on recycling of waste plastic.
	- **Design Development:** The device consists of two 1x1 foot steel platens supported by a steel frame with legs such that a bottle jack can sit below the two parallel steel platens to press them to press them together. The platens are directly supported on the rear surface by two equal steel members arranged in a cross to create four quadrants in which four 125 watt mica-insulated steel strip heaters are fixed to the rear side of the platen to provide direct AC resistive heating (for a system total of 8 heaters @ 1000W). The rear side of each platen also has an ungrounded type-k fine-diameter thermocouple inserted partially into the platen to provide temperature feedback to the controller. The controller consists of an Arduino Nano with two high power AC relays, two thermocouple amplifiers, a DC power supply, data logger, and graphical user-interface which runs a simple PID process loop using the thermocouple readings to output a low-frequency pulse-width modulation to the solid state relays. Standard ASTM testing molds created to test the produced material samples.
	- **Prototyping and Testing:** Steel stock purchased locally and an external company contracted to do all the cutting and preparation of the base parts. Final preparation of parts and assembly including welding and fastening done in-house. Electronics will be bought off-the-shelf and housed in a custom 3D printed enclosure with all the fixtures and supporting structures. HDPE, PET, and PC waste plastic regrind will be loaded into the molds and the device heated then insert and brought to temperature and the bottle jack engaged to compress the heated polymer with the aim to create high-density waste plastic sheet samples. The material samples can then analyzed, tested, and validated.
- ## Team Members
	- **Lead Designer:** Morgan Woods, Lead Investigator
	- **Team:**
		- Cameron Brooks, Electrical and Controls
		- Joshua M. Pearce, Supervising Professor
- ## Documentation and Design Drafts
	- [Gitlab: open-source-scientific-cold-and-hot-sheet-press](https://gitlab.com/uwo-fast/open-source-distributed-recycling-and-additive-manufacturing/sheet-press/open-source-scientific-cold-and-hot-sheet-press)
- ## Project Template Formatting Legend
- **Bold Text:** Used for section headings and key points.
	- `[Square Brackets]`: Indicate placeholders where specific information needs to be inputted.
	- `*(Italicized Text in Parentheses)*`: Provide instructions or additional information for filling out the template.
	- `- [List Item]`: Used for listing items or tasks.
	- `| Table |`: Tables are used for organizing tasks, timelines, and other structured data.
	  
	  ---

[//begin]: # "Autogenerated link references for markdown compatibility"
[Scientific Press Beta]: <Scientific Press Beta> "Scientific Press Beta"
[Scalable Open Induction Heating]: <Scalable Open Induction Heating> "Scalable Open Induction Heating"
[Custom Resistive Elements]: <Custom Resistive Elements> "Custom Resistive Elements"
[//end]: # "Autogenerated link references"