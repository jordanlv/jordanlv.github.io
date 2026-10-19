---
title: "Analyzing Shapley Additive Explanations to Understand Anomaly Detection Algorithm Behaviors and Their Complementarity"
authors:
  - "J. Levy"
  - "P. Saves"
  - "M. Garouani"
  - "N. Verstaevel"
  - "B. Gaudou"
venue: "Intelligent Data Analysis (IDA)"
venueFull: "International Symposium on Intelligent Data Analysis (IDA 2026), pp. 126–140"
year: 2026
date: 2026-04-18
type: Conference
lang: en
summary:
  en: "Uses SHAP contributions to compare how different anomaly detection algorithms make their decisions, and to identify which detectors complement each other."
  fr: "Utilise les contributions SHAP pour comparer la façon dont différents algorithmes de détection d’anomalies prennent leurs décisions, et identifier les détecteurs complémentaires."
url: "https://arxiv.org/abs/2602.00208"
image: "/papers/shap-anomaly-detectors-complementarity.webp"
---

## Abstract

Unsupervised anomaly detection is a challenging problem due to the diversity of data distributions and the lack of labels. Ensemble methods are often adopted to mitigate these challenges by combining multiple detectors, which can reduce individual biases and increase robustness. Yet building an ensemble that is genuinely complementary remains challenging, since many detectors rely on similar decision cues and end up producing redundant anomaly scores. As a result, the potential of ensemble learning is often limited by the difficulty of identifying models that truly capture different types of irregularities. To address this, we propose a methodology for characterizing anomaly detectors through their decision mechanisms. Using SHapley Additive exPlanations, we quantify how each model attributes importance to input features, and we use these attribution profiles to measure similarity between detectors. We show that detectors with similar explanations tend to produce correlated anomaly scores and identify largely overlapping anomalies. Conversely, explanation divergence reliably indicates complementary detection behavior. Our results demonstrate that explanation-driven metrics offer a different criterion than raw outputs for selecting models in an ensemble. However, we also demonstrate that diversity alone is insufficient; high individual model performance remains a prerequisite for effective ensembles. By explicitly targeting explanation diversity while maintaining model quality, we are able to construct ensembles that are more diverse, more complementary, and ultimately more effective for unsupervised anomaly detection.
