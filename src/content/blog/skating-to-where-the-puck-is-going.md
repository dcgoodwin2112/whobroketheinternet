---
title: "Skating to Where the Puck Is Going"
subtitle: "Three ways to work with AI, and a guess about which one wins."
date: 2026-05-31
author: "Dan Goodwin"
assistant: "Claude Opus 4.8"
excerpt: "Adoption of AI tools is climbing while trust in them falls — and that gap is a spec, not a contradiction. A look at three postures developers can take toward AI, and a bet that the governed, AI-first middle is where the work is heading."
cover: ./images/skating-to-where-the-puck-is-going.png
coverAlt: "Pencil-sketch style illustration on a warm cream background. A friendly white robot leans into a skating stride on ice, hockey stick poised to strike a black puck toward a goal net at right. Small code brackets, chat bubbles, a node diagram, and checkmarks float around it, with blue accent marks and motion lines suggesting speed."
---

## We Don't Trust It, and We Use It Anyway

Here's a pairing that stuck with me. In Stack Overflow's 2025 Developer Survey of roughly 49,000 developers, [84%](https://survey.stackoverflow.co/2025) said they use or plan to use AI tools in their work, up from 76% the year before. Over the same stretch, the share who trust the accuracy of what those tools produce fell to 29%. Adoption is climbing and confidence is dropping at the same time. We've collectively decided to build with something we increasingly don't fully trust.

I don't think that's a contradiction. I think it's the most honest signal we have about where this is going. The "should I use this?" question got settled a while ago, not because everyone was convinced but because the holdouts got out-shipped. The question with real stakes now is how you arrange your work around a tool that's fast, capable, and wrong often enough that you'd better design for catching it. Trust at 29% isn't a reason to stay away. It's a spec.

I didn't reason my way into changing how I work. I never sat down and decided to reorganize everything around AI. I looked up one day and realized it already had. The IDE I used to live in became one window among several, and tasks I'd once have split across five apps collapsed into one. This piece is me trying to say out loud what that shift seems to be pointing at. It's a read based on my own experience, not a flag I'm planting, but the direction feels real to me, so I'll walk through it.

## Three Places to Stand

To borrow the most overused line in hockey: skate to where the puck is going, not where it is. The smart part of that line was never speed. It's anticipation, committing to where the play will be rather than where it sits.

Right now the puck is in one clear place: copilots. The dominant way developers use AI is assistive. Autocomplete in the editor, a chat window for the hard parts, a tool that suggests while you decide. The autonomous, agentic stuff that dominates the discourse is still, in practice, a minority sport. In that same survey, most developers said they don't use agents or stick to simpler tools, and [38%](https://survey.stackoverflow.co/2025/ai/) had no plans to adopt them at all.

I find it useful to think about three broad postures a developer can take toward AI. The first is augmentation: you keep your existing workflow intact, the IDE at its center, and bolt AI on to move faster. The second is AI-first: you redesign the workflow around the assistant, so the center of gravity moves from the editor to the conversation, and the AI handles code plus the work around it, with guardrails on what it's allowed to touch. The third is maximum capability: you hand a largely autonomous agent broad access to your machine and your accounts and let it run.

These aren't rungs on a ladder, and they aren't mutually exclusive. I live in more than one depending on the day. They're better understood as stances, each a different bet on where the work is heading, and the rest of this is really about the relationship between them.

## The Comfortable Default

Augmentation is the norm, and it'll stay that way for a while. It deserves to. The copilots are dominant for sound reasons: GitHub Copilot has passed [20 million users](https://techcrunch.com/2025/07/30/github-copilot-crosses-20-million-all-time-users/), and the appeal is obvious. There's almost no switching cost. You keep your editor, your shortcuts, your muscle memory, and you just get faster at the parts that were slow. When a tool slots cleanly into habits you already have, it gets adopted. If you had to guess what developers will be using next quarter, "the thing closest to what they use now" is a safe bet.

While that fit is a real advantage, I suspect it's a temporary one. The IDE became the center of gravity for a reason. For decades the binding constraint on software was that a human had to write and read every line by hand, so we built an entire cockpit optimized for exactly that. The editor-at-the-center isn't a law of nature; it's an adaptation to a bottleneck. And the bottleneck is moving. As the slow part of the job shifts from writing code to describing what you want and checking what you got, a cockpit built for a human typing is suddenly built for the wrong thing. The habits don't become wrong, exactly. They just stop earning their keep, the way deep fluency with manual memory management went from a baseline skill to a specialist's footnote once the languages stopped demanding it.

So augmentation is the rational choice for the workflow we have. I just think that workflow is the thing about to change.

## Where I Ended Up

Which brings me to where I think the puck is actually going, and where I've ended up myself: an AI-first interface with governance built in.

For my own projects and the productivity work around them — the stuff where I get to choose — Claude's desktop app has become the surface I run almost everything through. The shift is small to describe and large to live with. You don't open a file and start typing with an assistant peering over your shoulder. You describe what you want, and the work happens around that description. Code is part of it, but only part; the same surface handles the research, the writing, the file wrangling, and the dozen small errands that used to live in separate tabs and apps. What I noticed first wasn't that any single task got faster. It was that the seams between tasks mostly disappeared.

What pushed this from interesting to important is recent. In early 2026 these desktop tools gained the ability to operate the computer directly, clicking and typing and opening applications the way a person would, for the cases where no purpose-built integration exists. The assistant's reach stopped ending at the edge of its own window.

And the way it does that is the whole point. It doesn't reach for the mouse first. It uses a precise, purpose-built integration when one exists; if there isn't one, it works through the browser; only when neither applies does it drive the desktop directly. The whole time, it asks before touching a new app and watches for the kind of injected instructions that turn helpful automation into a liability. That ordering is the philosophy in miniature: maximally capable in what it can reach, deliberately conservative in how it reaches. For a developer who wants to lean into AI workflows rather than just speed up the old ones, I think this is the right place to stand.

## The Frontier, and Why It's Narrowing

The third posture is the genuinely powerful one, and I don't want to undersell it. Tools like OpenClaw and Hermes Agent — open-source, self-hosted agents you leave running with broad access to your files, shell, and accounts — are a real step change. When they work, it's less like a faster assistant and more like a tireless junior who never logs off. OpenClaw briefly became the [most-starred project on GitHub](https://thenewstack.io/openclaw-github-stars-security/) for exactly this reason. For power users who understand what they're handing over, it's a defensible and even exciting choice.

The drawback is specific, and worth naming precisely rather than gesturing at. [Simon Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) calls it the "lethal trifecta": an agent with access to private data, exposure to untrusted content, and a way to send information back out. Hold all three at once and the untrusted content can carry instructions that hijack the agent before you ever see them. The injection isn't really the problem; the permissions are. A read-only assistant getting hijacked is an annoyance. An agent that can write to your files and spend from your accounts getting hijacked is an incident. The capability that makes this posture exciting is the same capability that makes a bad day expensive.

But here's what I keep coming back to: the gap between this posture and the governed one is closing, and from both directions. The governed tools are absorbing the raw capability. Direct [computer use](https://www.anthropic.com/news/3-5-models-and-computer-use) is the obvious example, and the major labs are all shipping their own versions of it. Meanwhile the open-source agents are adding the governance they were missing: [sandboxing, scoped permissions, approval flows](https://docs.openclaw.ai/gateway/security). This isn't proprietary tools beating open-source ones. It's everyone converging on the same shape, broad reach with a governing layer around it. So none of this is a bet against open source. Several of the tools most likely to win this way are open source, and the point is the posture, not who ships it.

There's a second force closing the gap that I don't think gets enough attention. A lot of what makes the maximum-capability posture necessary today is that agents are stuck operating software built for humans, clicking through interfaces designed for eyes and hands, which is exactly the brittle and risky part. That's starting to change. Apps, services, and tools are increasingly being built with agents as a user in their own right: structured, agent-facing interfaces an agent can call directly instead of puppeting a human one. The rise of standards like [MCP](https://modelcontextprotocol.io) is an early version of this. As more of the software around us is designed for agents rather than only for people, the need to hand an agent unbounded control of a human-shaped desktop shrinks. The governed posture gets to reach more things through clean front doors, and the riskiest kind of automation quietly becomes less necessary instead of more.

## My Best Guess

So here's where I land: augmentation is the norm and will stay that way for a while, because it fits the workflow we already have. Maximum capability has real uses for power users willing to accept the risk. But the middle, AI-first and governed, is where I think things are heading, and it's where I'd point any developer who wants to build around AI rather than just bolt it on. The gap that used to justify the riskier posture is shrinking, partly because the governed tools keep getting more capable and partly because the software around them is increasingly being built for agents in the first place.

I'll be honest that this is a read, not a forecast. A directional best guess from someone who's spent enough time in these tools to have a feel for the drift, not something I can prove. But I didn't argue myself into it. I noticed I'd already moved, and then went looking for the reason. Skate to where the puck is going. I think it's heading somewhere fairly specific this time, and if I'm going to be wrong, I'd rather be early than late.
