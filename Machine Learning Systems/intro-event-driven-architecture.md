---
layout: default
title: Introduction to Event-Driven Architecture
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/intro-to-event-driven-architecture/
---

# [Introduction to Event-Driven Architecture - ACloudGuru](https://acloudguru.com/course/introduction-to-event-driven-architecture)

Contents
1. Introduction
2. Legacy Event Processing
3. Event-Driven Architecture
4. Message vs Event
5. A Word on Idempotency
6. Summary

## 1. Introduction

- Event-driven architecture is a software architecture paradigm designed to promote the **production, detection, consumption and reaction** to events.
- An event-driven application is a program that **responds to event input.**
- Why is event-driven architecture important?
    - Provides valuable Business Advantages
    - Solves modern application problems
    - Easier to implement than legacy applications
- Can be applied in any cloud platform

## 2. Legacy Event Processing

> What's covered: Events, Discuss how events are handled in legacy applications

What's an event?
- "A thing that happens - especially one of importance."
- Could be anything that happens.

### Legacy strategy for working with events

> Traditional multi-tier applications are built around a Database. Historically, programmers have approached events by inserting all events into a DB and executing queries against those events.

**New events** were acted on by a **scheduled DB job** at a somewhat regular interval.

4 problems facing the modern application

| Problem   | Explanation                  |
|:----------|:------------------------------------------|
| Availability | Traditionally, one monolithic application. In modern applications, we have microservices, each of which has to be available 99.999% of the time. i.e. < 5 mins of downtime per year (40 seconds of downtime per month). Includes event processing. |
| Scalability | Event processing needs to scale rapidly to meet the demand of applications **without introducing latency**. |
| Source of Truth | Need a single source of truth. Was easy before microservices as all the data resided in a single DB, but when applications share a DB, there will be problems like **dependencies on schema changes or performance issues**. Common solution to this problem: 1 DB per service. But this would mean dealing with **distributed transactions and the complexity of maintaining multiple DBs**. |
| Synchronous | Legacy event processing is often synchronous. In a typical request/response scenario, the client waits for the server to respond. So, it blocks all other activity until it receives a response or timeout expires. Problem: if the microservice has resource block, timeouts will occur exponentially, which will impact every other service. |

Why modern applications need a new approach:
- World is changing at an alarming pace and as a result
- companies operate globally
- companies create applications that integrate the entire organization
- 24/7 availability expected

Solution all these problems:
- Event-driven architecture to the rescue!
- **"Organizations must provide real-time application communication, and in order to accomplish this, they must become event-driven."**

How event-driven architecture solves the 4 problems

| Problem | Solution                                                                             |
|:--------|:-------------------------------------------------------------------------------------|
| Availability | 

## 3. Event-Driven Architecture

> What's covered: About event-driven architecture, Critical components of an event-driven application, messaging models, different styles of event processing, how an event-driven application works, examples of event-driven applications

## 4. Message vs Event

> What's covered: Compare and contrast messages and events

## 5. A Word on Idempotency

> What's covered: Idempotency as it relates to events

## 6. Summary
