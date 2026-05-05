---
title: "Build First, Figure It Out Later: Prototyping as Creative Practice"
date: 2026-05-04
author: "Dan Goodwin"
assistant: "Claude Sonnet 4.6"
excerpt: "AI-assisted prototyping doesn't just compress timelines — it changes what kind of thinking is valuable. When a wrong direction costs an afternoon instead of weeks, validation moves out of the spec and into the product, and building itself becomes a form of discovery."
cover: ./images/build-first-figure-it-out-later-2.png
coverAlt: "Pencil-sketch style blog cover on a cream paper background. A paper airplane launches from an open sketchbook filled with rough scribbles, diagrams, loose notes, a pencil, eraser, and crumpled paper, with subtle blue accent marks suggesting creative momentum."
---

Building software used to front-load all the thinking. Requirements docs, wireframes, roadmap sessions, stakeholder sign-off — weeks of alignment before a single line of working code. There's a reason that discipline existed. When building something takes months, you cannot afford to be wrong. The cost of a bad direction is enormous, so you hedge, plan carefully, and treat commitment like an asset.

That calculus is changing. AI-assisted prototyping doesn't just make building faster. It changes what kind of thinking is valuable, which risks are worth taking, and what it even means to develop software. The shift is less about speed and more about what speed makes possible.

---

## Validation in Real Time, Not in a Document

The traditional case for upfront planning is simple: changing direction late in a project is expensive. So you spend time at the beginning trying to think your way to certainty. You write specs. You review them. You revise them. You align on them. Then you build.

The problem is that no document ever captured what it actually feels like to use a piece of software. Certainty is hard to manufacture in the abstract.

When you can have a working prototype in front of you in a few hours, speculation becomes less necessary. You stop asking "will this work?" and start finding out whether it does. That's not a small shift. It moves validation out of the meeting room and into the product itself, where it belongs.

This isn't an argument against planning. It's an argument for making planning tangible. A working thing answers questions that no spec ever will.

---

## The Cheap Wrong Turn

In traditional software development, a bad direction has a real price. Weeks of work. Sprint planning that has to be unwound. Team bandwidth spent on something that gets thrown away. That price conditioned developers — and whole organizations — to be conservative. You hedge. You over-plan. You treat uncertainty as something to eliminate before you start building.

With AI-assisted prototyping, a wrong direction costs you an afternoon.

That changes your relationship with uncertainty in a fundamental way. You can take a swing at an approach without committing to it. You can build the version you're skeptical about just to confirm your skepticism — or to be surprised. The emotional weight of being wrong drops significantly when the recovery time is measured in hours rather than weeks.

This is one of the more underrated aspects of the shift. It's not just that failure is faster to recover from. It's that the fear of failure stops shaping your decisions as heavily. You get to be more honest with yourself about what you don't know.

---

## Getting Out of Your Own Head

There's a mode developers get stuck in. It's the right mode for writing production code: thinking in systems, data flows, edge cases, and architecture. It's a terrible mode for figuring out whether something is actually useful.

When you're thinking about how a feature is implemented, you're not thinking about how it feels to use it. These are different headspaces, and switching between them is harder than it sounds. Most developers spend most of their time in implementation mode. The result is software that is technically sound but misses something at the product level. Not because the developer isn't thoughtful, but because the demands of the craft pull attention toward the code and away from the experience.

AI-assisted prototyping shifts that balance. When you're spending less mental energy on implementation details, you have more left over to actually use what you're building. You notice when a button is in the wrong place. You feel the friction in a flow. You start reacting to the product the way a user would, rather than evaluating it the way an engineer would.

This is something developers often struggle with, and it's rarely framed as a skills gap worth addressing. It is.

---

## The Prototype as a Discovery Instrument

The most useful thing about building a prototype quickly isn't that it ships faster. It's that using it tells you things you couldn't have figured out any other way.

A feature you were certain about turns out to be invisible in practice — nobody reaches for it. Something you threw together in twenty minutes becomes the thing everyone finds most useful. An interaction that seemed obvious in a spec feels confusing the moment it's in front of you.

Using a working prototype generates ideas that would never emerge from a planning session. You notice what's missing because you go looking for it and it isn't there. You realize something isn't needed because you built it, used it once, and moved on. This is the kind of feedback that's nearly impossible to get any other way.

Testing features as you build them isn't just a quality check. It's a discovery process. The prototype doesn't just validate what you planned — it reveals what you should have planned instead.

---

## A Shared Language for the Whole Team

One underappreciated benefit of working prototypes is what they do for team communication.

A Figma mock tells you what something might look like. A requirements doc tells you what something is supposed to do. A working prototype gives engineers, designers, product managers, and stakeholders a single concrete thing to actually use and respond to.

Disagreements that would have lasted weeks in the abstract tend to resolve quickly when everyone is looking at the same working thing. "This navigation feels buried" is a sentence anyone can respond to. "The information architecture should prioritize discovery over hierarchy" is a sentence that derails a meeting.

The faster and cheaper a prototype is to produce, the more the conversation can keep moving. You don't have to get buy-in on a direction before you can show it. You can show it and then get buy-in — or realize the direction was wrong before buy-in ever becomes a question.

---

## The Freedom to Wander

Traditional software development rewards commitment. You pick a direction, you plan it out, and you execute. Wandering is a liability. It means scope creep, missed deadlines, wasted effort.

AI-assisted prototyping rewards something closer to curiosity.

When exploring a different approach costs almost nothing, you're more likely to ask "what if this worked differently?" You can follow an idea sideways without feeling like you're burning the project down. Sometimes that detour leads nowhere. Sometimes it leads somewhere better than where you were originally headed — a simpler architecture, a more elegant interaction, an entirely different framing of the problem.

This isn't about being undisciplined. It's about recognizing that creativity has a process, and that process involves exploration. The best ideas rarely come from executing the first plan. They come from building something, reacting to it, and following what you notice.

---

## What This Isn't

I touched on this in my last post, and it applies here too: a working prototype is not a production application. It never was, and it's worth being clear-eyed about what that means.

AI does make production development faster. Boilerplate, tests, repetitive patterns, documentation: a lot of the work that used to pad out a sprint gets compressed. That's real. But it's a different kind of speed than what you get in a prototype. Error handling, accessibility, security, edge cases, performance under real load: this work requires deliberate attention that doesn't compress the same way. You're not just writing more code, you're making more careful decisions.

The risk isn't that AI fails to help with production code. It's that a polished prototype appears in a day and creates expectations that even an AI-accelerated production timeline can't always match. Stakeholders see something working and assume the hard part is done. Being honest about where you actually are, and what still has to happen before something ships, is part of the craft. A prototype is evidence, not a product. It's a way of thinking, not a shortcut to shipping.

---

## Conclusion

Prototyping with AI isn't just faster. It changes what kind of developer you can be.

When implementation is less of the bottleneck, you have room to think like a user, experiment without fear, and treat building itself as a form of discovery. The insight doesn't have to come before the work. It can come from the work — from the broken version of the thing that shows you what it needs to be.

Software development has always been a creative practice, even when it didn't feel like one. AI-assisted prototyping makes that easier to see.
