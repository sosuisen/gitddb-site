---
slug: collection
title: Collection
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

GitDocumentDB's collection API is based on the Git directory structure. You can use the Collection class to put, get, delete and search for documents under a specified directory.

<img src="/img/easy_to_use_small.png" alt="Collection API" width="400px" />

A Collection is hierarchical like directories, and attributes of a Collection are inherited from its parent Collection.

Collections are independent concerning synchronization. Each collection can only receive Git sync events related to documents under a specific directory.