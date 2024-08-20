---
title: 'DIY or Buy (developer edition)'
description: 'Knowing when to build it yourself and when to just use a library'
pubDate: '2024-08-20'
heroImage: 'images/diy_or_buy.webp'
author: Hendrik Crause
---

We developers really love to debate. When you go on [X](https://x.com) or [reddit](https://reddit.com) or any other platform where devs like to hang out, you'll find no shortage of people sharing their opinions on what the best language is, which paradigms are better, whether clean code is a thing, and a miriad of others. Today I'd like to share some of my thoughts on one of these debates, what I like to call the "DIY or Buy for devs". Whether it's better to use a library/framework or build it yourself. As with literally every debate devs get into, the answer is always the same... it depends.

Wait, wait, before you click away... There are actually a few easy-ish ways you can figure out which option is right for you. What it essentially boils down to is what you're trying to achieve. Which we'll explore by asking a few questions about your specific problem:

### Is there a deadline?

When we build things for ourselves, time is rarely a deciding factor. But when there's a client waiting for this new feature, or a commitment that was made or another deadline to consider, then we have a responsibility to ensure that we choose the most time efficient (within reason) approach we can. Usually picking the pre-made solution is the way to go here, but not always. Some libraries and frameworks take a considerable amount of time to learn due to their complexity or lack of good documentation. Use your best judgement based on the experience you have. It's also important to not use the existence of a deadline to justify taking shortcuts with your code.

### Is the main goal of the project to learn?

Easy, use whatever you feel like. Heck, do both and decide which approach ended up being better after the fact. The goal is to learn, so go build and experiment to your hearts content.

### Is there an established solution for the problem you're trying to solve?

Depending on the language and ecosystem you're using, there may be a function (or set of functions) that are part of the standard library that already solves the problem quite well. Sometimes there are very widely used libraries used across the industry for the exact purpose you want. These well established solutions became well established for a reason, they are good at what they do. Use them.

### Is the solution you're building core to your company's offering?

One would think this should go without saying, but trying to build a company that's simply a wrapper of another third party tool is not a good long term strategy. If the library you're using changes it's API or cost structure or if someone else builds the same wrapper at a lower cost or your customers find out they can just use your dependency themselves and cut out the middleman... well you don't really have much of a company left. So even though it may take longer, if it's core to what you offer, then either build it yourself or build something else.

### Is the library relatively small and/or trivial?

Do I really need to answer this? If you're pulling in a library instead of writing a single function then you're failing as a dev and should just be better.

### How important is the program's performance?

This could once again fall on either the DIY or Buy side. It really depends on the type of application being built, what hardware it will be run on and what sort of performance you can reasonably expect from the library you're thinking of importing. In many instances the overhead of bringing in a third party library on mission critical pieces of the software that needs to run at the absolute limits of what's possible is just not worth it. Other times the library maintainers work hard to ensure their implementations are the fastest and most performant it can be, so trying to replicate that won't be worth the extra effort if at all possible. Which you choose depends on the application and might require experimentation.

### Are there lots of edge cases or complexities to consider?

One of the main reasons that we started sharing and re-using libraries was so that we didn't have to re-implement complex solutions every time we write a new piece of software. It's why we're able to build larger and larger systems, because the really complicated pieces were already solved for us and we can just add a new layer on top. Some of the things that implementing yourself should generally be avoided are (but not limited to): encryption, i18n, dates and times (especially when timezones are involved), network protocols, anything related to linear algebra or complex mathematics. The obvious exceptions are when performance is critical or if the code is core to the business.

### Which do you prefer?

This may seem strange to include, but ultimately you are the one that has to maintain the code you write today. So if you've come this far and still haven't found enough compelling reasons to choose one or the other, then just go with what makes you happier. Functionality that you implement yourself and the library you added as a dependency will both come with maintanance burdens. You have to pick your poison.

### Conclusion

Ultimately whether you DIY or Buy your software will depend on many factors specific to your particular usecase. Whatever you decide to do though, just ensure it is the highest quality solution you can produce, learn as much as you can and try to enjoy what you do.