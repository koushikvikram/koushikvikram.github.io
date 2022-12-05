---
layout: default
title: 97 Things Every Programmer Should Know
parent: Book Summaries
nav_order: 2
permalink: /book-summaries/97-things-every-programmer-should-know/
---

# 97 Things Every Programmer Should Know

1. Act with Prudence
2. Apply Functional Programming Principles
3. Ask, "What Would the User Do?" (You Are Not the User)
4. Automate Your Coding Standard
5. Beauty Is in Simplicity
6. Before You Refactor
7. Beware the Share

8. The Boy Scout Rule
9. Check Your Code First Before Looking to Blame Others
10. Choose Your Tools with Care
11. Code in the Language of the Domain
12. Code is Design
13. Code Layout Matters
14. Code Reviews

15. Coding with Reason
16. A Comment on Comments
17. Comment Only What the Code Cannot Say
18. Continuous Learning
19. Convenience is Not an -ility
20. Deploy Early and Often
21. Distinguish Business Exceptions from Technical

22. Do Lots of Deliberate Practice
23. Domain-Specific Languages
24. Don't Be Afraid to Break Things
25. Don't Be Cute with Your Test Data
26. Don't Ignore That Error!
27. Don't Just Learn the Language, Understand Its Culture
28. Don't Nail Your Program into the Upright Position

29. Don't Rely on "Magic Happens Here"
30. Don't Repeat Yourself
31. Don't Touch That Code!
32. Encapsulate Behavior, Not Just State
33. Floating-Point Numbers Aren't Real
34. Fulfill Your Ambitions with Open Source
35. The Golden Rule of API Design

36. The Guru Myth
37. Hard Work Does Not Pay Off
38. How to Use a Bug Tracker
39. Improve Code by Removing It
40. Install Me
41. Interprocess Communication Affects Application Response Time
42. Keep the Build Clean

43. Know How to Use Command-Line Tools
44. Know Well More Than Two Programming Languages
45. Know Your IDE
46. Know Your Limits
47. Know Your Next Commit
48. Large, Interconnected Data Belongs to a Database
49. Learn Foreign Languages

50. Learn to Estimate
51. Learn to Say, "Hello, World"
52. Let Your Project Speak for Itself
53. The Linker is Not a Magical Program
54. The Longevity of Interim Solutions
55. Make Interfaces Easy to Use Correctly and Hard to Use Incorrectly
56. Make the Invisible More Visible

57. Message Passing Leads to Better Scalability in Parallel Systems
58. A Message to the Future
59. Missing Opportunities for Polymorphism
60. News of the Weird: Testers Are Your Friends
61. One Binary
62. Only the Code Tells the Truth
63. Own (and Refactor) the Build

64. Pair Program and Feel the Flow
65. Prefer Domain-Specific Types to Primitive Types
66. Prevent Errors
67. The Professional Programmer
68. Put Everything Under Version Control
69. Put the Mouse Down and Step Away from the Keyboard
70. Read Code

71. Read the Humanities
72. Reinvent the Wheel Often
73. Resist the Temptation of the Singleton Pattern
74. The Road to Performance is Littered with Dirty Code Bombs
75. Simplicity comes from Reduction
76. The Single Responsibility Principle
77. Start from Yes

78. Step Back and Automate, Automate, Automate
79. Take Advantage of Code Analysis Tools
80. Test for Required Behavior, Not Incidental Behavior
81. Test Precisely and Concretely
82. Test While You Sleep (and over Weekends)
83. Testing is the Engineering Rigor of Software Development
84. Thinking in States

85. Two Heads are often Better Than One
86. Two Wrongs Can Make a Right (and Are Difficult to Fix)
87. Ubuntu Coding for Your Friends
88. The Unix Tools Are Your Friends
89. Use the Right Algorithm and Data Structure
90. Verbose Logging will Disturb Your Sleep
91. WET Dilutes Performance Bottlenecks

92. When Programmers and Testers Collaborate
93. Write Code as if you had to Support it for the Rest of Your Life
94. Write Small Functions Using Examples
95. Write Tests for People
96. You Gotta Care About the Code
97. Your Customers Do Not Mean What They Say

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #1 - Act with Prudence

> *"Pay off technical debt as soon as possible. It would be imprudent to do otherwise."*

![Tech Debt Quadrant](images/tech-debt-quadrant.png)
- **Deliberate technical debt** is when you choose *'doing it quick'* over *'doing it right'* with the understanding that you'll come back and fix it later, but in the next iteration you become focused on new problems.
- Technical debt is a problem because you benefit from it in the short term, but you have to pay interest on it until it is fully paid off.
    - This makes it **harder to add features or refactor your code**, making it a **breeding ground for defects and brittle test cases**.
    - By the time you start fixing it, a whole stack of **not-quite-right design choices may be layered on top of the original problem**, making the code much harder to refactor and correct.
- However, there are times when you must incur technical debt to meet a deadline or implement a thin slice of a feature. In these situations,
    - **Track technical debt** by writing a task card or logging it in your issue-tracking system and paying it back quickly.
    - **Track interest accrued** on technical debt to **make the cost visible**. This will **emphasize the effect on business value** of the project's technical debt and **enables appropriate prioritization of the repayment**.

Resources:
- https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
- https://innolution.com/essential-scrum/table-of-contents/chapter-8-technical-debt
- https://innolution.com/blog/managing-the-accrual-of-technical-debt

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #2 - Apply Functional Programming Principles

> *Of course, the functional programming approach is not optimal in all situations. For example, in object-oriented systems, this style often yields better results with domain model development than with user-interface development. Master the functional programming paradigm so that you are able to judiciously apply the lessons learned to other domains.*

- **Mutable variables** are a leading cause of defects in Object-Oriented Code.
    - Visibility semantics (eg. Public, Private, Protected keywords in Java) help reduce these defects or at least drastically narrow down the location of mutable variables.
    - However, the true culprit may be **designs that employ excessive mutability** (typically taught in Object-Oriented Programming courses).
- Having a design with a high degree of **referential transparency** helps eliminate this unnecessary mutability.
    - Referential transparency implies that **functions consistently yield the same results given the same input, irrespective of where and when they are invoked**. i.e. Function evaluation depends less (ideally, not at all) on the side effects of mutable state.
    - Referential transparency can be achieved by having an **astute test-driven design** and by being sure to **"Mock Roles, not Objects"**, resulting in a design that typically has 
        - **Better responsibility allocation** with more numerous, smaller functions that **act on arguments passed into them, rather than referencing mutable member variables**.
    - This makes it easier to locate where a rogue value is introduced, leading to fewer defects and simple-to-debug code.
- Nothing will get these ideas as deeply into your bones as learning a functional programming language, where this model of computation is the norm.

Resources:
- [Mock Roles, not Objects](http://jmock.org/oopsla2004.pdf)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)
- [What is "Semantics visibility"?](https://softwareengineering.stackexchange.com/questions/194855/what-is-semantics-visibility)
- [What is a side-effect of a function in Python?](https://dev.to/dev0928/what-is-a-side-effect-of-a-function-in-python-36ei)


-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #3 - Ask, "What Would the User Do?" (You Are Not the User)

> *False consensus bias is when we assume that other people think like us. It explains why programmers have such a hard time putting themselves in the users' position.*

- Users don't think like programmers. They don't recognize the patterns and cues programmers use to work with, through, and around an interface.
- The best way to find out how a user thinks is to watch one complete a real task using our product.
    - Avoid tasks that are too specific.
    - Get the user to talk through their progress. Don't interrupt. Don't try to help.
    - Keep asking yourself "Why are they doing that?" and "Why are they not doing that?"
- Users do a core of things similarly. They try to complete tasks in the same order - and they make the same mistakes in the same places.
    - Design around this core behavior.
- Tool tips are more useful than help menus because when users get stuck, unlike programmers, they narrow their focus.
    - When they narrow their focus, it becomes harder for them to see solutions elsewhere on the screen.
    - If you still need to have instructions or help text, make sure to locate it right next to your problem areas.
- Provide one really obvious way of doing things than two or three shortcuts.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #4 - Automate Your Coding Standard

> *But if it’s such a problem, why is it that we want a coding standard in the first place? Well-formatted code doesn’t earn you points with a customer that wants more functionality.*

- Following a coding standard that everyone on the project agrees on ensures that
    - Nobody can “own” a piece of code just by formatting it in his or her private way.
    - Developers are prevented from using certain antipatterns to avoid common bugs.
    - Development speed is maintained from the beginning to the end.
- Following a coding standard can be quite a boring task if it isn’t automated and enforced where possible. So,
    - Make code formatting part of the build process.
    - Use static code analysis tools to scan for unwanted antipatterns. If found, break the build.
    - Automatically check the results of test coverage. Break the build if test coverage is low.
- For things that can’t be automated, consider them a set of guidelines supplementary to the coding standard that is automated, but accept that you and your colleagues may not follow them as diligently.
- Have a dynamic coding standard that evolves as the project evolves.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #5 - Beauty is in Simplicity

> *"Beauty of style and harmony and grace and good rhythm depends on simplicity." - Plato*

- No matter how complex the total application or system is, keep the individual parts simple
    - Simple objects with a **single responsibility** containing **simple, focused methods** with **descriptive names**
    - **Simple relationships** with the other parts of the system
- Simplicity in code enables
    - Readability
    - Maintainability
    - Speed of development
    - Beauty

Resources:
- [Single Responsibility Principle in Python](https://towardsdatascience.com/single-responsibility-principle-in-python-ac4178b922de)

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #6 - Before You Refactor

1. Start by taking stock of the existing codebase and the tests written against that code.
    - This helps you understand the strength and weaknesses of the code as it currently stands.
2. Avoid the temptation to rewrite everything.
    - Throwing away the old code, especially if it was in production, means that you are throwing away months (or years) of tested, battle-hardened code that may have had certain workarounds and bug fixes you aren’t aware of. 
    - If you don’t take this into account, the new code you write may end up showing the same mysterious bugs that were fixed in the old code. This will waste a lot of time, effort, and knowledge gained over the years.
3. Many incremental changes are better than one massive change.
    - Incremental changes allow you to gauge the impact on the system more easily through feedback, such as from tests.
4. After each development iteration, it is important to ensure that the existing tests pass.
    - Add new tests if the existing tests are not sufficient to cover the changes you made, but don't throw away tests from old code without due consideration.
5. Personal preferences with respect to the style and structure of code and ego shouldn't get in the way.
6. New technology is an insufficient reason to refactor.
    - Unless a cost-benefit analysis shows that a new language or framework will result in significant improvements in functionality, maintainability, or productivity, it is best to leave it as it is.
7. Remember that humans make mistakes.
    - Restructuring will not always guarantee that the new code will be better—or even as good as—the previous attempt.

Resources:
- https://amberwilson.co.uk/blog/how-to-approach-a-new-codebase/
- https://blog.jamesmichaelhickey.com/refactoring-legacy-monoliths-part-2-convincing-management/
- https://wiki.c2.com/?EconomicsOfRefactoring

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Widsom #7 - Beware the Share

> *As I worked through my first feature, I took extra care to put in place everything I had learned—commenting, logging, pulling out shared code into libraries where possible, the works. The code review that I had felt so ready for came as a rude awakening—reuse was frowned upon!.*


-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Wisdom #8 - The Boy Scout Rule

> *"Try and leave this world a little better than you found it." - Robert Stephenson Smyth Baden-Powell*

- Follow the boy scout rule in your code. You don't have to make every module perfect before you check it in. You simply have to **make it a little bit better** than when you checked it out.
    - **Add clean code** to a module.
    - **Clean up at least one other thing** before you check the module back in.
- Teams help one another and clean up after one another. They do this because it's good for everyone, not just good for themselves.
    - This could see help end the relentless deterioration of our software systems. Instead, our systems would gradually get better as they evolve.
    - Teams would care for the system as a whole, rather than just individuals caring for their own small part.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Programming Widsom #9 - Check Your Code First Before Looking to Blame Others

> *"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth." - Sherlock Holmes*

-------------------------------------------------------------------------------------------------------------------------------------------------------