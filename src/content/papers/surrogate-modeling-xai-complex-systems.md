---
title: "Surrogate Modeling and Explainable Artificial Intelligence for Complex Systems: A Workflow for Automated Simulation Exploration"
authors:
  - "P. Saves"
  - "P. S. Palar"
  - "M. D. Robani"
  - "N. Verstaevel"
  - "M. Garouani"
  - "J. Levy"
  - "J. Aligon"
  - "B. Gaudou"
  - "K. Shimoyama"
  - "J. Morlier"
venue: "arXiv"
year: 2025
date: 2025-10-19
type: Preprint
lang: en
summary:
  en: "A workflow that trains fast surrogate models on a few simulation runs, then uses explainability methods to explore complex systems, from aircraft design to agent-based urban models."
  fr: "Une démarche qui entraîne des modèles de substitution rapides à partir de quelques simulations, puis s’appuie sur des méthodes d’explicabilité pour explorer des systèmes complexes, de la conception d’avions aux modèles multi-agents urbains."
url: "https://arxiv.org/abs/2510.16742"
image: "/papers/surrogate-modeling-xai-complex-systems.webp"
---

## Abstract

Complex systems are increasingly explored through simulation-driven workflows that combine physics-based and empirical models with optimization and analytics. Despite their power, these workflows face two central obstacles: high computational cost from repeated expensive simulator runs, and limited transparency when decisions rely on opaque black-box models. We propose a workflow that addresses both challenges by training lightweight emulators on compact designs of experiments that (i) provide fast, low-latency approximations of expensive simulators, (ii) enable rigorous uncertainty quantification, and (iii) support global and local eXplainable Artificial Intelligence (XAI) analyses. This work formalizes a methodological bridge accommodating continuous, categorical, and integer variables across diverse domains, from engineering design to socio-environmental agent-based models. To validate surrogate explanations and examine how faithfully they reflect simulator behavior, we introduce a comparative methodology incorporating active validation filters, including explanation consistency and aleatoric uncertainty quantification. Furthermore, we provide practical guidelines for coupling experimental designs with emulator training to select architectures that balance computational efficiency with interpretability. We demonstrate the framework across two contrasting paradigms: a deterministic multidisciplinary design simulation of a hybrid-electric aircraft and a stochastic agent-based simulation of urban segregation. Results show that coupling surrogates with XAI enables large-scale exploration in seconds, reveals critical nonlinear interactions, and highlights potential design and policy levers while establishing consistent explanations across architectures.
