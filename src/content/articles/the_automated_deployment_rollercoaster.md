---
title: 'The Automated Deployment Rollercoaster'
description: "Getting it set up and running the first time is a struggle. When it works it seems like the greatest thing the world has ever seen. And when it breaks you're having a nightmare week."
pubDate: '2024-08-10'
heroImage: 'images/frenzied_android_typing.webp'
author: Hendrik Crause
---

As I discussed in my previous article ([Why Software took over the World](/blog/article/why_software_took_over_the_world)), one of the main goals of software is to automate repetitive and prone to human error tasks. So naturally, when we as developers encounter a set of repetitive tasks that need to be executed every time a new version of our software has to be deployed, we invent ways of automating as much of it as we can. Enter the world of Automated Deployment Pipelines, also known as CI/CD (Continuous Integration / Continuous Delivery).

Before we discuss autmated deployments though, lets take a quick detour to discuss what it takes to manually deploy an app. Every piece of software has to execute somewhere. There are usually 3 places where that can happen:

1. Your device
2. A user's device
3. A server

And how code is deployed depends on where it will execute. On your own devices it's usually just making sure you have all the executables are available and then issuing the command to start. Getting code to execute on a user's device means that your user's need to somehow get hold of the software and then issue whatever command needed to start. This means either have them install your software and open it up when they want, or let them download and execute it whenever they visit your site (webapps essentially). Executing code on a server means you need to somehow access the server, load all the required software onto it and issue the commands to make it start. For most modern applications, you will need to deploy your code to all 3.

## Setting it all up

Now here comes the first difficulty when trying to automate the deployment process: every app (or at least every type of app) has vastly different requirements for getting it deployed, and you need to know quite a few details about it before setting out to automate the deployment process. Things like:

- What language was it written in?
- Does it need to be compiled/transpiled?
- What external dependencies need to be in place for your software to execute?
- What operating system does it need to run on?
- How will a user get hold of the software?
- Etc...

Luckily for us most of these are dependent on each other, so getting answers to all these out won't be that difficult. But it is still important to consider all or at least most of them at some point during the process.

Once you've figured out how your software will be deployed if done manually... you then get to explore all the hundreds of different tools that have been developed over the years to "ease" the burden of deployment. Some frameworks comes with these processes baked-in, so that helps a little. Things like Docker, Teraform, Github actions, Kubernetes, every cloud provider's custom tool that you have to learn and setup, whichever package manager and build tools your language uses, and... you get the point. For the most part, none of these individually are especially difficult to learn the basics of, but because there are so many of them and because they need to integrate with each other, the complexity of getting everything to work smoothly together can increase drastically. All this complexity has spawned entire companies dedicated to making deployments simple, given you only use the tools they provide exactly the way they provide it.

## Magic happens

But after all this effort, when you get everything building and deploying automatically, coding starts to feel magical again. Having the ability to get a new feature or bug fix out in minutes instead of weeks makes you feel like (and look like) a wizard. 

Not needing to worry about a complicated build and deployment process, means you get to spend more time writing new features, fixing bugs and improving runtime performance. Most large corporations have teams dedicated to maintaining the build and deployment process (usually called something like the build team or devops). These are the heros that ensure developers can focus more effort on writing code.

Developers are happy, management is happy, clients are happy. Life is good.

## Things start to break

As with most things in tech, things tend to break after a while as new features, requirements and constraints are added. Because these build and deployment pipelines can become really complex and in many instances are spread across multiple machines and/or services, figuring out exactly where a failure occured isn't always straight-forward. A new environment variable that hasn't been propogated everywhere, a network failure between two or more of the steps, a unit test that works on a dev machine but not during the build's quality check, different versions of a library or tool between the steps of the deployment pipeline. Any of these or a thousand others could be the cause for the entire system to fail.

Which means the developers are forced to either bypass the deployment pipeline and deploy manually again while the errors are sorted out, or get the deployment pipeline fixed ASAP. New features can't go out as easily and quickly as before. Bugs linger for longer than they should. No new security and performance upgrades.

Developers are sad, management is sad, clients are sad. Life is no longer good.

But we're professionals. We designed this deployment system and we put it all in place once. We can do it again. Besides, since we documented and took notes of how everything was set up, going through every step to find and fix the issues shouldn't take that much time.

You did document how everything was set up, right?