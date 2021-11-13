---
slug: how-to-use-git-as-an-offline-database
title: How to Use Git as an Offline-First Database?
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

Git ecosystem can be an excellent knowledge management platform, but fundamentally it is operated by human decisions.

I discussed and implemented deterministic ways for computers to synchronize and resolve conflicts in the Git ecosystem automatically.

https://betterprogramming.pub/how-to-use-git-as-an-offline-first-database-dca7f9604142

It was much more difficult than I had previously thought.

It looked like Git needed some constraints to work deterministically, and I needed to make explicit what implicit rules humans use in automated workflows like CI/CD.
