---
layout: minimal
title: "Antonio Marino - Research"
section: "research"
permalink: /research.html
---

<section class="section" style="padding-top: calc(var(--nav-height) + 3rem);">
  <div class="container">
    <div class="section-header reveal">
      <h1 class="section-title">Research</h1>
      <p class="section-subtitle">
        My work bridges rigorous control theory with modern deep learning to build autonomous multi-robot systems that are safe, scalable, and deployable.
      </p>
    </div>

    <div class="research-grid reveal-stagger">

      <!-- Card 1: Dynamics of Learning -->
      <div class="research-card reveal" onclick="toggleResearchDetail('rd1')">
        <div class="research-card-media">
          <img src="/assets/img/obstacle_stab.gif" alt="GNN Stability Analysis" />
        </div>
        <div class="research-card-body">
          <h2 class="research-card-title">Learning-Based Stable Control</h2>
          <!--<p class="research-card-summary">
            Developing neural distributed controllers intrisically robust and stable through nonlinear control theory.
          </p>-->
          <div class="research-card-tags">
            <span class="tag">Non-linear Systems</span>
            <span class="tag">GNNs</span>
            <span class="tag">Neural ODEs</span>
            <span class="tag">Stability</span>
          </div>
        </div>
        <div class="research-detail" id="rd1">
          <h3>Challenge</h3>
          <p>Standard neural models function as black boxes lacking the theoretical guarantees necessary for safe deployment on physical robotic systems.</p>
          <h3>Approach</h3>
          <ul>
            <li><strong>Input-to-State Stability (ISS):</strong> Applied to the recurrent structure of Gated GNNs, ensuring bounded and stable behaviour despite real-world disturbances.</li>
            <li><strong>Liquid-Graph Time-Constant (LGTC) Networks:</strong> A continuous-time Neural ODE formulation leveraging contraction analysis for structural stability.</li>
            <li><strong>Dynamic Average Estimation:</strong> A distributed autoregressor with regularized stability constraints and encoding-decoding to reduce communication overhead.</li>
          </ul>
          <div class="research-detail-pubs">
            <a href="/publications.html"><i class="fas fa-arrow-right"></i> Related publications</a>
          </div>
        </div>
      </div>

      <!-- Card 2: End-to-End Distributed Control -->
      <div class="research-card reveal" onclick="toggleResearchDetail('rd2')">
        <div class="research-card-media">
          <img src="/assets/img/drone50.gif" alt="Multi-UAV Trajectory Planning" />
        </div>
        <div class="research-card-body">
          <h2 class="research-card-title">End-to-End Distributed Control &amp; Estimation</h2>
          <!-- <p class="research-card-summary">
            Structured learning with GNNs for distributed perception, planning, and tracking across aerial swarms and micro-robotics.
          </p>-->
          <div class="research-card-tags">
            <span class="tag">Aerial Robotics</span>
            <span class="tag">Micro-Robotics</span>
            <span class="tag">Distributed Perception</span>
          </div>
        </div>
        <div class="research-detail" id="rd2">
          <h3>Challenge</h3>
          <p>Traditional robotic architectures rely on rigid decomposition that introduces latency and compounding errors across multi-agent interactions.</p>
          <h3>Approach</h3>
          <ul>
            <li><strong>Decentralized Multi-UAV Control:</strong> A dual-branch neural architecture for swarms that processes raw point clouds and learns neural collision constraints.</li>
            <li><strong>Hybrid Micro-Robot Tracking:</strong> A temporal graph system fusing visual data with historical control inputs for sub-millimeter accuracy under occlusion.</li>
            <li><strong>Graph-Enhanced Electrical Impedance Localization:</strong> Reinterpreting sensor electrodes as graph nodes to predict object locations directly from voltage measurements.</li>
          </ul>
          <div class="research-detail-pubs">
            <a href="/publications.html"><i class="fas fa-arrow-right"></i> Related publications</a>
          </div>
        </div>
      </div>

      <!-- Card 3: Dynamic Cluster Agreement -->
      <div class="research-card reveal" onclick="toggleResearchDetail('rd3')">
        <div class="research-card-media">
          <img src="/assets/img/AD_GB_RW.gif" alt="Dynamic Clustering" />
        </div>
        <div class="research-card-body">
          <h2 class="research-card-title">Dynamic Cluster Opinion Dynamics</h2>
          <!-- <p class="research-card-summary">
            A MARL framework using distributed dynamic clustering for fluid role allocation and multi-objective optimization across robot teams.
          </p>-->
          <div class="research-card-tags">
            <span class="tag">Reinforcement Learning</span>
            <span class="tag">Multi-Objective</span>
            <span class="tag">Opinion Dynamics</span>
          </div>
        </div>
        <div class="research-detail" id="rd3">
          <h3>Challenge</h3>
          <p>Multi-robot systems struggle with dynamic decision-making and fluid role allocation under uncertainty, particularly during spatial reorganization and resource depletion.</p>
          <h3>Approach</h3>
          <ul>
            <li><strong>Dynamic Heterogeneous Resource Assignment:</strong> Leverages structural similarities in return functions to dynamically cluster control policies.</li>
            <li><strong>Team-Based Multi-Objective Optimization:</strong> Agents form strategic coalitions with clustered scalarization functions to align heterogeneous priorities.</li>
            <li><strong>Topology-Agnostic Consensus:</strong> Validated on physical quadrotor swarms, ensuring stable clustering regardless of communication graph complexity.</li>
          </ul>
          <div class="research-detail-pubs">
            <a href="/publications.html"><i class="fas fa-arrow-right"></i> Related publications</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
