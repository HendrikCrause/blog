---
title: 'The Marraige of OOP and FP'
description: 'Instead of picking a side, why not learn to use both effectively?'
pubDate: '2024-09-29'
heroImage: 'images/marriage_fp_oop.webp'
author: Hendrik Crause
---

There's a lot of debate online - and depending on the type of circles you're in, offline too - about whether Object Oriented Programming (OOP) or Functional Programming (FP) is the better approach to writing software. These days FP seems to be ahead with developer sentiment, but I still remember a time when this wasn't the case. OOP used to be the defacto way to design any large system and you'll still find many codebases to this day built on OOP principles. My hope today is not to convince you that either one of them is superior to the other, but rather that we can use principles, patterns and techniques from both paradigms to write better software. A marriage of OOP and FP if you will.

### Some background

First off, this is not necessarily a new idea. I've spent half my career as a [Scala](https://www.scala-lang.org/) developer, and many of the ideas I have around mixing OOP and FP principles have their roots in its design. But there are many languages where these ideas can easily be transfered to. Of course some things just aren't supported in all languages, so you'll have to apply what you can.

Let's start by defining a few defining charactiristics of each:

### What is OOP?

Well, as the name implies, Objects &trade; are the main focus of OOP design. Every design pattern and principle's almost sole focus is on the creation, operation and interactions between objects. You can think of an object (or class as it's most commonly referred to) as a self-contained collection of state (a.k.a. fields, a.k.a. attributes) and functions that interact on that state (a.k.a. methods). Some other terms which will be useful to know:

#### Inheretance
The ability of one object to obtain the same fields and methods from another as well as be able to identify as the other class. We'll often refer to this relationship between objects as parent-child relationships.
#### Interface
A way of defining a set of methods that an object is expected to implement. Similar to inheretance, however there is no state or methods being inhereted. We say that an object _implements_ an interface.
#### Access Modifiers
Special keywords that determine where an object's attributes may be accessed from. Usually `public`, `private`, module private (default in java), subclass private (`protected` in java).
#### Instantiated
Somewhat fancy term for an object being created. We'll often refer to a specific object that was created as an instance.
#### Constructor / Destructor
Special methods that are executed when a new instance of an object is created or destroyed.
#### Abstract classes
Classes that cannot be instantiated by themselves. Another class that inherets from it must first be made. These are like a hybrid to interfaces and normal inheretance relationships since abstract classes may also contain state and some methods that are already implemented. Usually there are one or more methods that have to be implemented by child classes. 
#### Encapsulation
The practice of grouping related data fields and methods together and only interacting with the fields through the methods. In practice what this usually means is that a class's state should only be changed by calling a class method and not by accessing it directly. This behaviour is enforced through the use of access modifiers.
#### Generics
The ability of a programming language to create container objects where the type being contained is not explicitly defined. Think having a `Box` of `T` where `T` can be any other type (integers, floating point numbers, strings, objects). Whenever you reference the contained type `T` in your code the language compiler/interpreter will then replace with whatever type is contained.
#### Dependency Injection
At it's core dependency injection simply means passing in pre-constructed dependencies as arguments or setting them as object attributes instead of creating them when we require them. So instead of creating a database connection when we want to run a query we instead set a database connection as a class attribute which we set beforehand, or pass a database connection as a method parameter. Over the years, several frameworks and libraries have been developed to facilitate setting these dependencies across several parts of the codebase.

### What is FP?

Just like Objects were the main focus of OOP, Functions are the main focus of Functional Programming. All the design patterns and principles revolve around how functions should be called and how they should interact with other functions. A function can be thought of as a set of instructions that take in some input, performs some operations on said input and then returns some output. The most important goal of most FP practices is that functions should as far as possible be deterministic, i.e. for a given set of inputs, the outputs should always be the same. Some other useful terms to know include:

#### Immutability
Any parameter that is passed to a function as an input, should not have its value changed. Ideally the function should not even be able to.
#### Side Effects
Behaviour that is outside of a function's primary purpose. Some examples include, modifying and keeping internal state, printing to console or files and interacting with external systems. In many cases side effects are unavoidable, but it is recommended to limit the amount present in your programs.
#### Pure Function
A function that has no side effects.
#### Recursion
A function calling itself with some modification or subset of its input parameters.
#### Tail call optimisation
A feature of FP focused programming languages to improve performance of recursive functions. This is only possible for a specific style of recursive function though - most of the time it's for iterating over a collection. Under the hood the same stack frame is reused for every recursive call, as apposed to a new stack frame being created for every function call.
#### First class functions
The ability of a programming language to pass functions as input parameters, receive functions as output to other functions and store functions as variables.
#### Higher order functions
A function that recieves anothe function as input or returns another function.
#### Lambda function
A function that is created in-line, or as part of a larger statement. Usually lambdas only contain a single statement.
#### Lazy evaluation
Only executing a function when its ouput is required.
#### Pattern Matching
These are like if switch statements and if-else statements had a baby and raised it on a steady diet of steroids and heavy lifting. They take in one or more parameters like a switch statement, but are able to match on a lot more than just the underlying value. Their biggest benefit though is that most languages that support them will force you to match all possible cases, so you are gauranteed to know what code gets executed in every possible scenario and while developing you can easily check which scenarios you still need to cover.
#### Functors
Think of these like the generics of FP, except with a functional twist added. It refers to any type where one can apply a function to it's contents while preserving it's shape (the function name we apply to the contents is usually called map). So say we have a `Box` of `T`, and we then call `map` with a function that converts `T` into `U`, the result will be a `Box` of `U`. The original concept is from category theory in mathematics, which is why many people struggle to understand FP concepts in the beginning stages.
#### Monad
The most dreaded of FP concepts. It's similar to functors (in many instances they behave identically to functors), with just one extra twist. A monad may contain one of several different types of values (most commonly 2), but more importantly it must provide a way of applying a monad over itself, or in other words combining results. The usual ones are: 
  - `Optional` which can contain either a `Some` functor containing a single value or `None` which is the equivalent of nothing. Combining several `Optionals` will only have a `Some` if all of them contain a `Some`
  - `Result` which can contain either a `Success` functor with a value or a `Failure` functor with the associated error. Combining `Result` will only yield a `Success` if all `Results` contain `Success`.
#### Monadic Functions
These are functions where the input parameters types and return types are the same. So a function that takes a `List` as input and returns a `List`

Unfortunately with a lot of FP concepts, the explanations are far more complicated than the actual applications. Once you get the hang of it it becomes fairly intuative.

### What are the cons of each?

The biggest drawback of both paradigms ironically is the same... complexity. 

Proponents of FP will often site the multiple layers of abstractions in OOP codebases that make it hard to reason about where and when certain parts of the code executes and what the state of the program is at any point in time. Unit testing even the smallest parts of a large OOP system can become quite unwieldy due to all the extra dependancies you have to construct and inject just to get a single instance of one of these complex objects. Lots of large enterprise applications were built around Dependency Injection frameworks too, which obscures the state of these applications even more and is very difficult to navigate for most newcomers.

On the other hand, FP has its own set of complixities. For one, there are a ton of new concepts that you need to learn and habits you need to unlearn to become proficient in FP. My half-baked attempt at explaining just a few of them barely scratches the surface of what you'll need to grasp. Due to the nature of most FP languages, many things that are straight-forward in other languages (and also required by most software) require several layers of monads, functions and type massaging to accoplish in FP languages. Because of this, there's a common joke among programmers that no production Haskell applications exist.

### Get to the part where we use them together already!

If you looked closely at the explanations of common concepts from the two paradigms, you'll notice that at no point do any of them explicitly forbid the use of concepts from the other paradigm. So why not use the things we learn from both of them together? Many languages already support using both, and even for those that don't you can easily add pieces to mimic it. Don't have first class functions? Then make a class with a single method and no fields and call it Function (this is what the Java 8 standard library did when functional support was added to the language). Don't have classes or methods? Make a function that takes what would have been the instance as a first parameter (in python that's what the `self` parameter on a method is). Don't have Inheretence? That might not be the worst thing. A language that supports generics can easily be used to implement all the monadic types you need.

At the end of the day, the goal of any programmer and programming paradigm should be the same: to produce robust, maintainable and performant software. And as long as your goals are the same, you should use whatever strategies you can to achieve them. Sometimes it means using principles from OOP and other times it means using principles from FP, sometimes there are no guiding principles for your particular case.

### Some guiding principles

These are some of the guiding principles I try to use in my work. I'll also mention the OOP and FP principles that it relates to.

#### Keep related things together
And in the same vein, keep unrelated things apart. Keeping your classes / types / structs together with the functions that do operations with them in the same file or directory makes it easier to navigate the codebase and understand what's going on.
__Encapsulation__

#### Avoid mutations
Whenever you allow mutations to the contents of an object, you have to mentally keep note of all the places where these changes may occur. Which easily becomes overwhelming when this happens on multiple objects. If you have to make an update to the object, making a copy is often easier to track, although it comes at a performance cost.
__Encapsulation, Immutability__

#### Pass in everything you need
Or stated differently, don't keep a global state. Any time you write a function, try to keep the function as close to pure as possible. So no relying on some environment variable stored elsewhere, no interactions with state that was set somewhere far away, avoid side effects. This insures functions are easy to test and easier to reason about.
__Pure Functions, Side Effects, Dependency Injection__

#### Prefer Interfaces over Inheretence
One of the main sources of complexity in object oriented programs is the overuse of abstract base classes. Remember that when a class inherits from another it also gets ALL of its state and methods, but you can't immediately see the state that it inherits. So you might think you're just calling a simple method from the base class, but there might be any number of side effects and state being set without you knowing. Interfaces on the otherhand, don't have any state and force you to implement the functions yourself, so there is no hidden complexity.
__Inheretence, Interfaces, Side Effects__

#### Return your errors
In the same vein, don't return nulls. Once you get used to returning Monadic types instead of relying on generic error handling, you'll realise just how much potential bugs could have been avoided. Returning your errors forces you to decide what to do about it. In many other instances you wouldn't even know that there could be errors, which will just lead the program to crash. It might be little more upfront work, but you'll save yourself from hours of debugging later.
__Monads__

#### Learn your Language features
The final piece of advice is to learn as much as you can about the features your particular language provides as well as how those features are implemented. Every feature you learn about is like a new tool you keep on your belt. With time and practice you'll learn how and when to best use those tools to craft the best software you can.


So the next time you encounter an argument for why one paradigm might be better than another, hopefully you'll realise that both are simply a different way of thinking about software. You can even switch between thinking about how your software is structured (OOP) and how the software flows (FP) within the same project. As long as we keep on learning, improving and building good software. 