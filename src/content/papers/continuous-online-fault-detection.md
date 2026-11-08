---
title: "Continuous Online Fault Detection for Mobile Robots via Adaptive Edge Models"
authors:
  - "J. Levy"
  - "N. Verstaevel"
  - "V. Talon"
  - "B. Gaudou"
venue: "arXiv"
year: 2026
date: 2026-09-24
type: Preprint
lang: en
summary:
  en: "An online approach to fault detection for mobile robots, where lightweight models running on the robot keep adapting to new operating conditions over time."
  fr: "Une approche de détection de fautes en ligne pour les robots mobiles, où des modèles légers embarqués sur le robot s’adaptent en continu aux nouvelles conditions d’utilisation."
url: "https://arxiv.org/abs/2609.29194"
github: "https://github.com/jordanlv/teacher-student-online"
image: "/papers/continuous-online-fault-detection.webp"
---

## Abstract

Mobile robots require robust, real-time fault detection capable of continuous adaptation on constrained edge hardware. While deep time-series models excel at unsupervised anomaly detection, their computational cost prohibits high-frequency onboard execution. This paper bridges this gap via a Teacher-Student distillation framework. An offline foundation model (TSPulse) generates pseudo-labels from unlabeled time series augmented with fault injections. A lightweight MiniRocket Student, adapted with a Recursive Least Squares estimator, approximates this complex decision boundary to execute real-time inference onboard. Evaluations on the TSB-AD benchmark and a physical mobile robot demonstrate the Student achieves a 4.30 ms CPU inference latency. During real-world domain shifts, online adaptation enables the Student to recover from unseen mechanical degradation, improving VUS-PR scores from 0.26 to 0.75 without catastrophic forgetting. Crucially, an uncertainty-guided active learning strategy minimizes operator cognitive load, requesting sparse interventions only when encountering novel fault distributions. These results validate the deployment of state-of-the-art anomaly detection on resource-constrained robotics through offline-to-online distillation.
