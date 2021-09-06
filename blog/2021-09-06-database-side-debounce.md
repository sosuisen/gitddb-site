---
slug: database-side-debounce
title: Database-side debounce
author: Hidekazu Kubota
author_title: Creator of GitDocumentDB
author_url: https://github.com/sosuisen
author_image_url: https://github.com/sosuisen.png
tags: [git]
---

Database-side debounce has been experimentally implemented in GitDocumentDB v0.4.5. 

Debounce is a commonly used feature in UI development. Debounce is also well known to be provided by [Lodash](https://lodash.com/docs/#debounce) and [RxJS](https://rxjs.dev/api/operators/debounce).
Debounce executes an enqueued task only when a debounce time has passed without any other enqueued tasks. If a new task is enqueued before a debounce time passes, the previous tasks will be dropped and not executed, and a new debounce time is scheduled.

<img src="/img/debounce.jpg" alt="debounce" width="540px" />

Such a feature can reduce the processing load when continuously retrieving data from a server or persisting data from a (redux) store.

In the same way, debounce in GitDocumentDB drops consecutive 'put' or 'update' tasks to the same id document.

Database-side debouncing is intended to simplify the data store persistence procedure on the application side, especially in data flows involving DB synchronization and exclusive locking on the application side.

Debouncing on the database side may sound strange, but I think it can be considered for a document database that is updated on a per-document basis.

It is an experimental implementation and may be changed in the future.


