---
slug: pros-and-cons
title: Pros and cons
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

GitDocumentDB is compatible with Git. Distributed multi-primary databases and efficient CI/CD are inherited features from Git.

<img src="/img/fully_automated_small.png" alt="fully automated" width="400px" />

## Pros: 
- It automates Git synchronization workflows by resolving transactional and consistency conflicts, besides revision conflicts. 
- Typical synchronization patterns and diff-and-patch strategies solve them. Accessible CRUD and collection APIs for working with JSON reduce tasks. 

## Cons: 
- The throughput of GitDocumentDB is about the same as Git. It is not as fast as typical databases. 
- Storage size grows when managing many revisions of a document. 

These are a trade-off for Git features.