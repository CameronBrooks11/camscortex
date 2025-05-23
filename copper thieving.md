# Copper Thieving

- (Lee Ritchie's post)[https://www.freelists.org/post/si-list/Impact-on-Copper-Thieving-on-10G-Routing,3] paraphrased:
  - **Definition and Purpose:**
    - **Thieving** refers to the addition of copper to the outer layers of a Printed Circuit Board (PCB) to ensure a uniform copper distribution across its surface.
      - Crucial for achieving uniform copper plating within the holes of the PCB.
    - The primary reason for employing thieving is to balance the copper plating process. In the absence of uniform distribution, regions with minimal exposed copper would receive excessive plating, whereas areas with a high density of copper features (e.g., Ball Grid Arrays or connector pin fields) might not plate adequately.
    - Thieving works by redistributing the plating current, preventing it from concentrating excessively on sparsely featured areas and ensuring it is evenly spread across densely featured regions.
  - **Application Specifics:**
    - Thieving is exclusively an **outer layer process**. Adjustments made to inner layers for reasons other than thieving typically aim to even out the resin flow from the prepreg and are known as signal layer fills.
    - Historically, the necessity for inner layer signal fills was to avoid low spots due to uneven copper distribution on inner signal layers. However, advancements such as the introduction of call plates in PCB lamination processes have largely mitigated this issue.
  - **Design Considerations:**
    - When incorporating thieving into a PCB design, it is essential to maintain a sufficient distance from other features on the same layer to adhere to standard spacing guidelines and to prevent any adverse effects on impedance.
    - The proximity of thieving to traces on the next layer down depends on the nature of that layer. If it is a plane layer, standard spacing is generally adequate. However, if it is a signal layer, especially one involving a buried microstrip, thieving should not overlap with the traces in this buried layer to avoid interference.
