---
slug: is-git-crdt
title: Is the Git data model a CRDT?
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

Git is an excellent distributed version control system, but there are no examples of using it as a distributed database. Why is that?

The reason is that Git is a human-oriented tool, and you need to set up rules for automated processing. This article series will discuss how close Git is to a distributed database and define the rules for completing a distributed database.

## Is Git a CRDT?

Git is a kind of conflict-free replicated data type(CRDT), a model for updating replicated data in distributed databases.  CRDT is not only a data structure but also a procedure to process data.

Git isn't commonly referred to as CRDT, but it has aspects of CRDT from multiple perspectives. I've seen this discussion on social networking sites on rare occasions. However, they made no specific comparison between Git and existing CRDTs(*).

<img src="/img/serial_consistency_constraints_commit_graph_tegaki.png" alt="Commit graph of Git" width="540px" />

First, Git has a feature of a Multi-Value register (MV-Register).  MV-Register is a type of CRDT in that one piece of data has multiple revisions, so editing in various places at the same time does not destroy the data.

Second, Git has a feature of an add-only monotonic DAG. The commit-graph of Git is a directed acyclic graph (DAG). In this graph, the merge operation is designed not to destroy the graph structure, even if multiple users update the same commit-graph in different locations. Such a graph is an add-only monotonic DAG, a kind of CRDT.

## How to bring Git closer to a distributed database?

Git has good features for distributed databases because of the eventual consistency model of the CRDTs described above.
The bad part is that computers cannot resolve conflicts deterministically because they are assumed to be resolved manually by humans.
Other problems are that Git does not have database-like APIs and has a lot of overhead when viewed as a DB, but [I briefly discussed them in the past article](/blog/pros-and-cons).

If I could solve these problems, the benefits of using Git as a distributed database would be more incredible.

GitDocumentDB uses Git-CRDT, a deterministic solution to conflicts in Git, to achieve automatic synchronization. I will discuss the details in the next update.

(*) The following research report introduces a lot of CRDTs, including MV-Register and add-only monotonic DAG: 
Marc Shapiro, Nuno Preguiça, Carlos Baquero, Marek Zawirski. A comprehensive study of Convergent and Commutative Replicated Data Types. [Research Report] RR-7506, Inria – Centre Paris-
Rocquencourt; INRIA. 2011, pp.50. ria-00555588
