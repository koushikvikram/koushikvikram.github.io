---
layout: default
title: Understanding Distributed Systems
parent: Book Summaries
nav_order: 2
permalink: /book-summaries/understanding-distributed-systems/
---

# Understanding Distributed Systems

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<details>
    <summary> From the website: </summary>

The book is divided into 5 parts: Communication, Coordination, Scalability, Resiliency, and Maintainability.

### Part I: Communication
Communication between processes over the network, or inter-process communication (IPC), is at the heart of distributed systems — it's what makes distributed systems distributed. In order for processes to communicate, they need to agree on a set of rules that determine how data is processed and formatted. Network protocols specify such rules.

The protocols are arranged in a stack, where each layer builds on the abstraction provided by the layer below, and lower layers are closer to the hardware. When a process sends data to another through the network stack, the data moves from the top layer to the bottom one and vice-versa at the other end.

Even though each protocol builds on top of another, sometimes the abstractions leak. If you don't have a good grasp of how the lower layers work, you will have a hard time troubleshooting networking issues that will inevitably arise. More importantly, having an appreciation of the complexity of what happens when you make a network call will make you a better systems builder.
- `Chapter 2 ("Reliable links")` describes how to build a reliable communication channel (TCP) on top of an unreliable one (IP), which can drop or duplicate data or deliver it out of order. Building reliable abstractions on top of unreliable ones is a common pattern we will encounter again in the rest of the book.
- `Chapter 3 ("Secure links")` describes how to build a secure channel (TLS) on top of a reliable one (TCP). Security is a core concern of any system, and in this chapter, we will get a taste of what it takes to secure a network connection from prying eyes and malicious agents.
- `Chapter 4 ("Discovery")` dives into how the phone book of the internet (DNS) works, which allows nodes to discover others using names. At its heart, DNS is a distributed, hierarchical, and eventually consistent key-value store. By studying it, we will get the first taste of eventual consistency and the challenges it introduces.
- `Chapter 5 ("APIs")` concludes this part by discussing how loosely coupled services communicate with each other through APIs by describing the implementation of a RESTful HTTP API built upon the protocols introduced earlier.


### Part II: Coordination
A distributed system should try to give its clients the illusion they interact with a single node. Although achieving a perfect illusion is not always possible or desirable, it's clear that some degree of coordination is needed to build a distributed application.

In this part, we will explore the core distributed algorithms at the heart of distributed applications. This is the most challenging part of the book since it contains the most theory, but also the most rewarding one once you are through it.
- `Chapter 6 ("System models")` introduces formal models that categorize systems based on what guarantees they offer about the behavior of processes, communication links, and timing; they allow us to reason about distributed systems by abstracting away the implementation details.
- `Chapter 7 ("Failure detection")` describes how to detect that a remote process is unreachable. Failure detection is a crucial component of any distributed system. Because networks are unreliable, and processes can crash at any time, without failure detection a process trying to communicate with another could hang forever.
- `Chapter 8 ("Time")` dives into the concept of time and order. We will first learn why agreeing on the time an event happened in a distributed system is much harder than it looks and then discuss a solution based on clocks that don't measure the passing of time.
- `Chapter 9 ("Leader election")` describes how a group of processes can elect a leader that can perform privileged operations, like accessing a shared resource or coordinating the actions of other processes.
- `Chapter 10 ("Replication")` introduces one of the fundamental challenges in distributed systems: replicating data across multiple processes. This chapter also discusses the implications of the CAP and PACELC theorems, namely the tradeoff between consistency and availability/performance.
- `Chapter 11 ("Coordination avoidance")` explores weaker consistency models for replicated data, like strong eventual consistency and causal consistency, which allow us to build consistent, available, and partition-tolerant systems.
- `Chapter 12 ("Transactions")` dives into the implementation of ACID transactions that span data partitioned among multiple processes or services. Transactions relieve us from a whole range of possible failure scenarios so that we can focus on the actual application logic rather than all the possible things that can go wrong.
- `Chapter 13 ("Asynchronous transactions")` discusses how to implement long-running atomic transactions that don't block by sacrificing the isolation guarantees of ACID. This chapter is particularly relevant in practice since it showcases techniques commonly used in microservice architectures.


### Part III: Scalability
For an application to scale, it must run without performance degradations as load increases. In this part, we will walk through the journey of scaling a simple CRUD web application comprised of a single-page JavaScript application that communicates with an application server through a RESTful HTTP API.

The simplest and quickest way to increase the application's capacity to handle load is to scale up the machine hosting it. However, the application will eventually hit a hard physical limit that we can't overcome no matter how much money we are willing to throw at it. The alternative to scaling up is to scale out by distributing the application across multiple machines.

As we will repeatedly see in this part, there are three fundamental and independent patterns that we can exploit to build scalable applications: breaking down an application into separate services, each with its own well-defined responsibility (functional decomposition); splitting data into partitions and distributing them among nodes (partitioning); and replicating functionality or data across nodes, also known as horizontal scaling (replication).
- `Chapter 14 ("HTTP caching")` discusses the use of client-side caching to reduce the number of requests hitting the application.
- `Chapter 15 ("Content delivery networks")` describes using a content delivery network (CDN), a geographically distributed network of managed reverse proxies, to further reduce the number of requests the application needs to handle.
- `Chapter 16 ("Partitioning")` dives into partitioning, a technique used by CDNs, and pretty much any distributed data store, to handle large volumes of data. The chapter explores different partitioning strategies, such as range and hash partitioning, and the challenges that partitioning introduces.
- `Chapter 17 ("File storage")` discusses the benefits of offloading the storage of large static files, such as images and videos, to a managed file store. It then describes the architecture of Azure Storage, a highly available and scalable file store.
- `Chapter 18 ("Network load balancing")` talks about how to increase the application's capacity by load-balancing requests across a pool of servers. The chapter starts with a simple approach based on DNS and then explores more flexible solutions that operate at the transport and application layers of the network stack.
- `Chapter 19 ("Data storage")` describes how to scale out the application's relational database using replication and partitioning and the challenges that come with it. It then introduces NoSQL data stores as a solution to these challenges and recounts their evolution since their initial adoption in the industry.
- `Chapter 20 ("Caching")` takes a stab at discussing caching from a more general point of view by diving into the benefits and pitfalls of putting a cache in front of the application's data store. Although caching is a deceptively simple technique, it can create subtle consistency and operational issues that are all too easy to dismiss.
- `Chapter 21 ("Microservices")` talks about scaling the development of the application across multiple teams by decomposing it into independently deployable services. Next, it introduces the concept of an API gateway as a means for external clients to communicate with the backend after it has been decomposed into separated services.
- `Chapter 22 ("Control planes and data planes")` describes the benefits of separating the serving of client requests (data plane) from the management of the system's metadata and configuration (control plane), which is a common pattern in large-scale systems.
- `Chapter 23 ("Messaging")` explores the use of asynchronous messaging channels to decouple the communication between services, allowing two services to communicate even if one of them is temporarily unavailable. Messaging offers many other benefits, which we will explore in the chapter along with its best practices and pitfalls.


### Part IV: Resiliency
In the last part, we mentioned the three fundamental scalability patterns: functional decomposition, data partitioning, and replication. They all have one thing in common: they increase the number of moving parts (machines, services, processes, etc.) in our applications. But since every part has a probability of failing, the more moving parts there are, the higher the chance that any of them will fail. Eventually, anything that can go wrong will go wrong; power outages, hardware faults, software crashes, memory leaks — you name it.

To guarantee just two nines of availability, an application can only be unavailable for up to 15 minutes a day. That's very little time to take any manual action when something goes wrong. And if we strive for three nines, we only have 43 minutes per month available. Clearly, the more nines we want, the faster our systems need to detect, react to, and repair faults as they occur.

In this part, we will discuss a variety of resiliency best practices and patterns to achieve that.
- `Chapter 24 ("Common failure causes")` explores some of the most common root causes of failures.
- `Chapter 25 ("Redundancy")` describes how to use redundancy, the replication of functionality or state, to increase the availability of a system. As we will learn, redundancy is only helpful when the redundant nodes can't fail for the same reason at the same time, i.e., when the failures are not correlated.
- `Chapter 26 ("Fault isolation")` discusses how to isolate correlated failures by partitioning resources and then describes two very powerful forms of partitioning: shuffle sharding and cellular architectures.
- `Chapter 27 ("Downstream resiliency")` dives into more tactical resiliency patterns for tolerating failures of downstream dependencies that you can apply to existing systems with few changes, like timeouts and retries.
- `Chapter 28 ("Upstream resiliency")` discusses resiliency patterns, like load shedding and rate-limiting, for protecting systems against overload from upstream dependencies.

### Part V: Maintainability

It's a well-known fact that the majority of the cost of software is spent after its initial development in maintenance activities, such as fixing bugs, adding new features, and operating it. Thus, we should aspire to make our systems easy to modify, extend and operate so that they are easy to maintain.

Good testing, in the form of unit, integration, and end-to-end tests, is a minimum requirement to be able to modify or extend a system without worrying it will break. And once a change has been merged into the codebase, it needs to be released to production safely without affecting the application's availability. Also, the operators need to be able to monitor the system's health, investigate degradations and restore the service when it gets into a bad state. This requires altering the system's behavior without code changes, e.g., toggling a feature flag or scaling out a service with a configuration change.

In this part, we will explore some of the best practices for testing and operating large distributed applications.
- `Chapter 29 ("Testing")` describes the different types of tests, unit, integration, and end-to-end tests, that we can leverage to increase the confidence that a distributed application works as expected. This chapter also explores the use of formal verification methods to verify the correctness of an application before writing a single line of code.
- `Chapter 30 ("Continuous delivery and deployment") dives into continuous delivery and deployment pipelines to release changes safely and efficiently to production.
- `Chapter 31 ("Monitoring")` discusses how to use metrics, service-level indicators, and dashboards to monitor the health of distributed applications. It then talks about how to define and enforce service-level objectives that describe how the service should behave when it's functioning correctly.
- `Chapter 32 ("Observability")` introduces the concept of observability and its relation to monitoring. Later, it describes how to debug production issues using logs and traces.
- `Chapter 33 ("Manageability")` describes how to modify a system's behavior without changing its code, which is a must-have to enable operators to quickly mitigate failures in production when everything else fails.

</details>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Preface

- The available information on building distributed systems is spread out all over the place. 
- There's a lot of theoretical material and a lot of practical material, but not much in between. 
- This book brings together the core theoretical and practical concepts of distributed systems.
- It focuses on breadth rather than depth.

