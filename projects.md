---
layout: modern-fullwidth
title: "Antonio Marino - Projects"
section: "projects"
header_name: "Antonio Marino"
---

<div class="content-section">
<h1>Key Research Contributions</h1>

<div class="project-card">

<h2>Dynamics of Learning in Multi-Agent Systems</h2>
<div class="project-media-left">
  <img src="/assets/img/GNN.gif" alt="Multi-UAV System">
</div>
<p>
  <strong>The Challenge:</strong> Standard neural models function as "black boxes" lacking the theoretical guarantees—such as safety and convergence—necessary for safe deployment on physical robotic systems. This complexity is exponentially higher in multi-agent systems, where global stability depends on time-varying, distributed interaction graphs.
</p>

<p>
  <strong>The Solution:</strong> This work bridges the gap between rigorous control theory and deep learning by reinterpreting Graph Neural Networks (GNNs) not as static function approximators, but as distributed dynamical systems. By analyzing the recurrent structure of Gated GNNs through nonlinear control theory, the framework derives precise conditions for stability. These theoretical insights transform the training process: rather than blindly optimizing for accuracy, stability criteria are enforced as explicit constraints during learning. This results in a unified methodology for designing distributed controllers and estimators that are mathematically guaranteed to be stable, robust to topological changes, and efficient for bandwidth-constrained networks.
</p>

<ul>
  <li><strong>Input-to-State Stability (ISS):</strong> A control theory condition applied to the recurrent structure of Gated GNNs. It ensures the system remains bounded and stable despite real-world disturbances and is used to enforce internal stability by design.</li>
  <li><strong>Liquid-Graph Time-Constant (LGTC) Networks:</strong> A continuous-time Neural ODE formulation designed to handle irregular sampling and communication loads. Leveraging contraction analysis, it enhances expressivity and ensures structural stability without the high computational cost of solving ODEs at every step.</li>
  <li><strong>Dynamic Average Estimation:</strong> A learning-based, distributed autoregressor that replaces slow-converging traditional models. It incorporates regularized stability constraints and a novel encoding-decoding mechanism to strictly bound communication overhead while achieving rapid convergence.</li>
</ul>

<div class="project-tags">
  <span class="tag">Control Theory</span>
  <span class="tag">GNNs</span>
  <span class="tag">Neural ODEs</span>
  <span class="tag">Stability Analysis</span>
</div>

</div>

<hr class="project-divider">

<div class="project-card">

<h2>End-to-End Distributed Control & Estimation</h2>
<div class="project-media-left">
  <img src="/assets/img/drone50.gif" alt="Multi-UAV System">
</div>

<p>
  <strong>The Challenge:</strong> Traditional robotic architectures rely on rigid decomposition (perception, estimation, planning) that introduces latency and compounding errors. Conversely, standard end-to-end learning approaches often act as monolithic "black boxes," discarding the critical structural and topological information inherent in multi-agent interactions and sensor arrays.
</p>

<p>
  <strong>The Solution:</strong> A structured learning paradigm that explicitly leverages Graph Neural Networks (GNNs) to retain physical and topological dependencies. By embedding this structure into end-to-end models, the approach compensates for sensing deficiencies—such as visual obstructions or sensor failures—and is validated across two radically different scales: autonomous aerial swarms and medical micro-robotics.
</p>

<ul>
  <li><strong>Decentralized Multi-UAV Control:</strong> A dual-branch neural architecture for macroscopic swarms that processes raw point clouds and exchanges learned features. It learns "neural collision constraints" to guarantee safety in cluttered environments without global maps.</li>
  <li><strong>Hybrid Micro-Robot Tracking:</strong> A temporal graph system for the microscopic scale that fuses visual data (via CNNs) with historical control inputs (via GNNs). This maintains sub-millimeter accuracy for magnetically driven robots even during complete visual occlusion.</li>
  <li><strong>Graph-Enhanced Electrical Impedance Localization (GEIL):</strong> A method that reinterprets sensor electrodes as graph nodes to predict object locations directly from voltage measurements, successfully bypassing the computationally intensive inverse problem of traditional tomography to reduce latency.</li>
</ul>

<p>
  This work demonstrates how combining domain knowledge with modern deep learning can create systems that are both performant and interpretable, bridging the gap between academic research and practical deployment.
</p>

<div class="project-tags">
  <span class="tag">Aerial Robotics</span>
  <span class="tag">Micro-Robotics</span>
  <span class="tag">Distributed Perception</span>
  <span class="tag">Collision Avoidance</span>
</div>

</div>

<hr class="project-divider">

<div class="project-card">

<h2>Dynamic Cluster Agreement in Multi-Robot Reinforcement Learning</h2>

<p>
  <strong>The Challenge:</strong> Multi-robot systems struggle to achieve robust coordination when facing tasks that require dynamic decision-making and fluid role allocation under uncertainty. These failures are most pronounced during spatial reorganization, role adaptation due to resource depletion (e.g., battery levels), and the semantic alignment required to balance conflicting priority weights.
</p>

<p>
  <strong>The Solution:</strong> A novel Multi-Agent Reinforcement Learning (MARL) framework anchored in distributed dynamic clustering. By utilizing a neural dynamic cluster agreement mechanism over LGTC networks, this architecture treats clustering as a continuous flow rather than a discrete switch. This allows agents to organically form spatial and role-based groups, synchronizing preference weights to maintain Pareto-alignment despite environmental volatility.
</p>

<ul>
  <li><strong>Dynamic Heterogeneous Resource Assignment:</strong> Leverages structural similarities in return functions to dynamically cluster control policies based on the spatial distribution of resources, optimizing task resolution.</li>
  <li><strong>Team-Based Multi-Objective Optimization:</strong> Addresses scenarios where agents must form strategic coalitions—represented by clustered scalarization functions—to align heterogeneous priorities and effectively cover all shared objectives.</li>
  <li><strong>Topology-Agnostic Consensus:</strong> A robust mechanism validated on physical quadrotor swarms that ensures stable clustering regardless of the communication graph's complexity or sparsity, bridging the simulation-to-reality gap.</li>
</ul>

<div class="project-media-left">
  <img src="/assets/img/ParetoFR.png" alt="Multi-UAV System">
</div>
<div class="project-media-right">
  <img src="/assets/img/example-ad.png" alt="Multi-UAV System">
</div>

<div class="project-tags">
  <span class="tag">Reinforcement Learning</span>
  <span class="tag">Multi-Objective Optimization</span>
  <span class="tag">Swarm Intelligence</span>
  <span class="tag">Dynamic Clustering</span>
</div>

</div>

</div>