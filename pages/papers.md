---
layout: default
title: Papers & Publications
permalink: /papers/
---

# Papers & Publications

A collection of my academic papers, research publications, and written work.

---

## 2025

### Learning Bayesian Networks Under Local Differential Privacy

**Authors:** Alireza Khodaie, Mehmet Emre Gursoy
**Published in:** IEEE Transactions on Information Forensics and Security, 2025  
**Abstract:** Bayesian networks are widely used for causal discovery and probabilistic modeling across diverse domains including healthcare, multi-dimensional data analysis, environmental modeling, and industrial processes. Although previous work has studied the learning of Bayesian networks under centralized differential privacy, to the best of our knowledge, the problem of learning Bayesian networks under local differential privacy (LDP) remains open. In this paper, we address this problem by proposing two solution methods for learning Bayesian networks under LDP: LDP-BN and LDP-BN+. Our first solution called LDP-BN utilizes a novel algorithm for computing mutual information values necessary for building a Bayesian network under LDP, but it suffers from high utility loss since the privacy budget needs to be divided into many pairs of attributes and candidate parent sets. To reduce the amount of noise, we propose …  
[Read Paper](https://ieeexplore.ieee.org/abstract/document/11082347) | [DOI](https://doi.org/10.1109/TIFS.2025.3588444)

### Don't Hash Me Like That: Exposing and Mitigating Hash-Induced Unfairness in Local Differential Privacy

**Authors:** Berkay Kemal Balioglu, Alireza Khodaie, Mehmet Emre Gursoy
**Published in:** 30th European Symposium on Research in Computer Security (ESORICS 2025)  
**Abstract:** Local differential privacy (LDP) has become a widely accepted framework for privacy-preserving data collection. In LDP, many protocols rely on hash functions to implement user-side encoding and perturbation. However, the security and privacy implications of hash function selection have not been previously investigated. In this paper, we expose that the hash functions may act as a source of unfairness in LDP protocols. We show that although users operate under the same protocol and privacy budget, differences in hash functions can lead to significant disparities in vulnerability to inference and poisoning attacks. To mitigate hash-induced unfairness, we propose Fair-OLH (F-OLH), a variant of OLH that enforces an entropy-based fairness constraint on hash function selection. Experiments show that F-OLH is effective in mitigating hash-induced unfairness under acceptable time overheads.  
[Read Paper](https://arxiv.org/pdf/2506.20290) | [DOI](https://doi.org/10.48550/arXiv.2506.20290)

### Post-processing in Local Differential Privacy: An Extensive Evaluation and Benchmark Platform

**Authors:** Alireza Khodaie, Berkay Kemal Balioglu, Mehmet Emre Gursoy
**Published in:** IFIP International Conference on ICT Systems Security and Privacy Protection, 2025  
**Abstract:** Local differential privacy (LDP) has recently gained prominence as a powerful paradigm for collecting and analyzing sensitive data from users’ devices. However, the inherent perturbation added by LDP protocols reduces the utility of the collected data. To mitigate this issue, several post-processing (PP) methods have been developed. Yet, the comparative performance of PP methods under diverse settings remains underexplored. In this paper, we present an extensive benchmark comprising 6 popular LDP protocols, 7 PP methods, 4 utility metrics, and 6 datasets to evaluate the behaviors and optimality of PP methods under diverse conditions. Through extensive experiments, we show that while PP can substantially improve utility when the privacy budget is small (i.e., strict privacy), its benefit diminishes as the privacy budget grows. Moreover, our findings reveal that the optimal PP method depends on multiple factors …  
[Read Paper](https://arxiv.org/pdf/2507.05875) | [DOI](https://doi.org/10.1007/978-3-031-92882-6_6)

### LDP3: An Extensible and Multi-Threaded Toolkit for Local Differential Privacy Protocols and Post-Processing Methods

**Authors:** Berkay Kemal Balioglu, Alireza Khodaie, Mehmet Emre Gursoy
**Published in:** IEEE International Conference on Cyber Security and Resilience (CSR), 2025  
**Abstract:** Local differential privacy (LDP) has become a prominent notion for privacy-preserving data collection. While numerous LDP protocols and post-processing (PP) methods have been developed, selecting an optimal combination under different privacy budgets and datasets remains a challenge. Moreover, the lack of a comprehensive and extensible LDP benchmarking toolkit raises difficulties in evaluating new protocols and PP methods. To address these concerns, this paper presents LDP3 (pronounced LDP-Cube), an open-source, extensible, and multi-threaded toolkit for LDP researchers and practitioners. LDP3 contains implementations of several LDP protocols, PP methods, and utility metrics in a modular and extensible design. Its modular design enables developers to conveniently integrate new protocols and PP methods. Furthermore, its multithreaded nature enables significant reductions in execution times …  
[Read Paper](https://arxiv.org/pdf/2507.05872) | [DOI](https://doi.org/10.1109/CSR64739.2025.11130078)

---

## 2024

### Grid-Based Decompositions for Spatial Data under Local Differential Privacy

**Authors:** Berkay Kemal Balioglu, Alireza Khodaie, Ameer Taweel, Mehmet Emre Gursoy
**Published in:** European Symposium on Research in Computer Security, 2024  
**Abstract:** Local differential privacy (LDP) has recently emerged as a popular privacy standard. With the growing popularity of LDP, recent works have applied LDP to spatial data, and grid-based decompositions have been a common building block in DP and LDP. In this paper, we study three grid-based decomposition methods for spatial data under LDP: Uniform Grid (UG), PrivAG, and AAG. UG is a static approach that consists of equal-sized cells. To enable data-dependent decomposition, PrivAG was proposed by Yang et al. (2022). To advance the state-of-the-art in adaptive grids, this paper proposes the Advanced Adaptive Grid (AAG) method. For each grid cell, following the intuition that the cell’s intra-cell density distribution will be affected by its neighbors, AAG performs uneven cell divisions depending on the neighboring cells’ densities. We experimentally compare UG, PrivAG, and AAG using three real-world location …
[Read Paper](https://arxiv.org/pdf/2407.21624) | [DOI](https://doi.org/10.1007/978-3-031-82349-7_8)

---
