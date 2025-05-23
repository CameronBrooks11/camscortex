# GSoC 2024 Project Planning

## Project Title: Simple Library Manager/Downloader for OpenSCAD Scripts

[https://github.com/openscad/openscad/issues/3479](https://github.com/openscad/openscad/issues/3479)

[https://github.com/opencax/GSoC/issues/57](https://github.com/opencax/GSoC/issues/57)

[https://github.com/entropic-dev/entropic/issues/365#issuecomment-675635682](https://github.com/entropic-dev/entropic/issues/365#issuecomment-675635682)

## Overview

- OpenSCAD, a popular tool for creating 3D CAD models, has seen substantial growth in its library ecosystem. However, discovering and integrating these libraries into projects remains a manual and cumbersome process. This project aims to simplify the discovery and installation of libraries, inspired by systems like the Arduino IDE's Library Manager.

### Objectives

- Simplify Library Discovery & Installation: Facilitate easy finding and integrating of libraries for OpenSCAD users.
- Dependency Management: Enable users to declare library dependencies that will be automatically downloaded and installed.
- Command Line Interface: Focus on creating a CLI tool, with potential future expansion to GUI integration.
- Implementation as a Reusable Library: Develop the tool as a library to allow integration into various contexts.

### Technical Details

- Programming Language: C++
- Knowledge Area: Network programming
- Package Management: Explore package management solutions that align with OpenSCAD's needs.
- Dependency Specification: Define a format for specifying library dependencies.
- Lock File Support: Implement a system for lock files to ensure consistent dependency management.
- Source Limitation: Initially, limit the tool to certain providers (e.g., GitHub), but design for future expansion to multiple sources.
- Main Process:
  - Download an index file from a fixed location.
  - Check dependencies against this index file.
  - Download required library versions, utilizing a caching system where applicable.

### Expected Outcome

- A functional tool that allows OpenSCAD users to easily declare and manage library dependencies, streamlining the process of working with external libraries.

### Project Scope & Difficulty

- Difficulty: Medium
- Size: Long (350 hours)

#### Additional Information

- Potential Mentors: Marius Kintel (IRC: kintel), Torsten Paul (IRC: teepee)
- Organization Website:[OpenSCAD](https://www.openscad.org/)

#### References & Discussions

- Package Manager Discussion: Extensive discussion in openscad/openscad `#3479` on GitHub, with a bounty of $100.
- Ideas and Proposals:
  - Use of existing package managers (e.g., npm) for managing OpenSCAD packages.
  - Development of a simple package manager specific to OpenSCAD (scadpm).
  - Alternative module path resolution methods for project-specific library management.
  - HTTP import functionality for direct inclusion of libraries via URLs.
- Notable Contributions:
  - FearTheCowboy (Member of Microsoft's Embedded/Cross-platform C++ team) suggested a tool (VCPKG-CE) that could potentially align with OpenSCAD's requirements.
  - Discussion about the need for a simple, robust solution that addresses library isolation, discoverability, and support for micro-libraries.

### Action Plan for GSoC 2024

- Research and Analysis: Deep dive into existing discussions and proposals, particularly focusing on the outcomes and suggestions in the GitHub threads.
- Technical Proficiency: Enhance skills in C++ and network programming.
- Mentor Interaction: Engage with potential mentors early to refine the project proposal.
- Prototype Development: Start developing a basic prototype that addresses the core functionality.
- Community Engagement: Participate in OpenSCAD community discussions for feedback and ideas.

### Conclusion

- This project presents an opportunity to significantly impact the OpenSCAD community by providing a much-needed tool for library management. The success of this project lies in its ability to integrate seamlessly with existing workflows, making it easier for users to leverage the growing library ecosystem in OpenSCAD.

## Evaluation of Potential Avenues for OpenSCAD Library Manager Development (GSoC 2024 Planning)

### Discussion Overview

- Simple Library Manager for OpenSCAD (opencax/GSoC#57)
  - Goal: Facilitate library discovery and integration for OpenSCAD.
  - Approach: CLI-based tool, eventually extendable to GUI.
  - Technical Requirements: C++ programming, network programming knowledge.
  - Proposed Process:
    - Download an index file from a set location.
    - Check and resolve dependencies.
    - Download and manage library versions.
  - Challenges:
    - Establishing a robust package management system.
    - Deciding on the format for dependency specification and lock file.
- Package Manager Discussion (openscad/openscad#3479)
  - Main Concerns:
    - Isolation of libraries per project.
    - Enhancing discoverability of libraries.
    - Supporting micro libraries for specialized tasks.
  - Proposed Solutions:
    - Developing a bespoke package manager akin to npm or cargo.
    - Utilizing existing package managers (e.g., npm).
    - Implementing an alternative module path resolve method (like node_modules).
    - Supporting HTTP import and use.

### Potential Avenues & Evaluation

- Develop a Dedicated Package Manager (scadpm)
  - Pros: Tailored specifically for OpenSCAD; full control over features.
  - Cons: High development and maintenance cost; requires significant resources.
- Utilize an Existing Package Manager (e.g., npm)
  - Pros: Low development cost; leveraging an established system.
  - Cons: Loss of independence; potential compatibility issues.
- Implement Alternative Module Path Resolution
  - Pros: Project-specific library management; incremental development potential.
  - Cons: May limit other solutions; could complicate future enhancements.
- HTTP Import and Use
  - Pros: Easy to implement; backward compatible.
  - Cons: Risk of broken URLs; doesn't fully solve discoverability issue.
- VCPKG-CE Approach (as discussed by fearthecowboy)
  - Pros: Cross-platform; isolated artifact installation; doesn't require admin/root access; no system configuration changes.
  - Cons: Relies on node.js (though this is managed internally); still in early stages.

### Recommended Approach for GSoC 2024

- Given the discussions and the need for a balance between functionality, development effort, and future-proofing, the following approach is recommended:
- Hybrid Solution: Start with a simple, existing package management system as the base (such as npm or VCPKG-CE) and customize it for OpenSCAD’s specific needs. This approach can reduce the initial development overhead while providing a robust foundation.
- Focus on Isolation and Discoverability: Ensure that the system supports isolated libraries for each project and enhances the discoverability of libraries.
- Integration with OpenSCAD’s Environment: Seamlessly integrate with the OPENSCADPATH environment variable and existing OpenSCAD workflows.
- Consideration for Future GUI Integration: Design the CLI tool with potential GUI integration in mind for future development.
- Security and Simplicity: Prioritize security by avoiding executable scripts in artifacts and keeping the system declarative. Simplify artifact metadata to facilitate easy use by library developers.
- Community Feedback: Regularly engage with the OpenSCAD community for feedback, especially when considering significant changes or additions to the system.

## Conclusion

- The development of a Simple Library Manager/Downloader for OpenSCAD is a complex task that requires careful consideration of various factors. By starting with an existing package management system and tailoring it to OpenSCAD's needs, we can create a powerful tool that enhances the user experience while maintaining the flexibility to adapt and evolve over time. Regular community engagement and feedback will be crucial to ensure the tool meets the needs of its users.
