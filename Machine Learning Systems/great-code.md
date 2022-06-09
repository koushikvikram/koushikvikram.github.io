---
layout: default
title: Great Code
parent: Machine Learning Systems
nav_order: 2
permalink: /ml-systems/great-code/
---

# Writing Great Code

## [Torvalds' quote about good programmer](https://softwareengineering.stackexchange.com/questions/163185/torvalds-quote-about-good-programmer#comment312412_163185)

It might help to consider what Torvalds said right before that:

> git actually has a simple design, with stable and reasonably well-documented data structures. In fact, I'm a huge proponent of designing your code around the data, rather than the other way around, and I think it's one of the reasons git has been fairly successful […] I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important.

What he is saying is that good data structures make the code very easy to design and maintain, whereas the best code can't make up for poor data structures.

If you're wondering about the git example, a lot of version control systems change their data format relatively regularly in order to support new features. When you upgrade to get the new feature, you often have to run some sort of tool to convert the database as well.

For example, when DVCS first became popular, a lot of people couldn't figure out what about the distributed model made merges so much cleaner than centralized version control. The answer is absolutely nothing, except distributed data structures had to be much better in order to have a hope of working at all. I believe centralized merge algorithms have since caught up, but it took quite a long time because their old data structures limited the kinds of algorithms they could use, and the new data structures broke a lot of existing code.

In contrast, despite an explosion of features in git, its underlying data structures have barely changed at all. Worry about the data structures first, and your code will naturally be cleaner.

------------------------------------------------------------------------------------------------------------------------------------

Torvalds is not alone in this, by the way: *"Show me your flowchart and conceal your tables, and I shall continue to be mystified. Show me your tables, and I won't usually need your flowchart; it'll be obvious."* – Fred Brooks, The Mythical Man-Month. *"Show me your code and conceal your data structures, and I shall continue to be mystified. Show me your data structures, and I won't usually need your code; it'll be obvious."* and *"Smart data structures and dumb code works a lot better than the other way around."* – Eric S. Raymond, The Cathedral and The Bazaar.

------------------------------------------------------------------------------------------------------------------------------------

"A wise engineering solution would produce—or better, exploit—reusable parts." - Doug McIlroy

## Other References

- [Software exoskeletons - John D. Cook](https://www.johndcook.com/blog/2011/07/21/software-exoskeletons/)
- [Book Summary: A Philosophy of Software Design](https://freshman.tech/philosophy-of-software-design-summary/)
- [Book notes: A Philosophy of Software Design](https://danlebrero.com/2021/02/24/philosophy-of-software-design-summary/#ch-5)
- [Programming Paradigms: A must know for all Programmers](https://hackr.io/blog/programming-paradigms)
- [Boundaries - A talk by Gary Bernhardt from SCNA 2012](https://www.destroyallsoftware.com/talks/boundaries)
- [On the criteria to be used in decomposing systems into modules](https://blog.acolyer.org/2016/09/05/on-the-criteria-to-be-used-in-decomposing-systems-into-modules/)
- [Out of the Tar Pit](https://blog.acolyer.org/2015/03/20/out-of-the-tar-pit/)
- [SOLID: The First 5 Principles of Object Oriented Design](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [Open-source Software Engineering and Leadership principles - Make better decisions using principles - For Software Engineers and technical leaders who want better results.](https://principles.dev/)
- [More shell, less egg](https://leancrew.com/all-this/2011/12/more-shell-less-egg/)
- [Side effect (computer science)](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
- [Pure function](https://en.wikipedia.org/wiki/Pure_function)
- [What is a side-effect of a function in Python?](https://dev.to/dev0928/what-is-a-side-effect-of-a-function-in-python-36ei)
- [Duck Typing in Python](https://www.pythonmorsels.com/duck-typing/)
- [Structure and Interpretation of Computer Programs](https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs)
- [How to Design Programs](https://htdp.org/)

## Reading Code Written by Brilliant Engineers

- [How to Approach a New Codebase](https://amberwilson.co.uk/blog/how-to-approach-a-new-codebase/)
- [The Architecture of Open Source Applications](http://aosabook.org/en/index.html)
- [Reading Great Code](https://python-guide-cn.readthedocs.io/en/latest/writing/reading.html)
- [Code Style](https://python-guide-cn.readthedocs.io/en/latest/writing/style.html#code-style)
- [howdoi - GitHub](https://github.com/gleitz/howdoi)
- [Click - GitHub](https://github.com/pallets/click)
- [PostgreSQL Database Management System - GitHub](https://github.com/postgres/postgres)
    - [Welcome to the PostgreSQL Wiki!](https://wiki.postgresql.org/wiki/Main_Page)
- [Flask - GitHub](https://github.com/pallets/flask)
- [Rusty's API Design Manifesto](http://sweng.the-davies.net/Home/rustys-api-design-manifesto)

## Views and Comments

Great code should be an expression of what needs to be done, not how to do it, abstracts away implementation details.

Values don't have side effects.