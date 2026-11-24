# Fake Horoscopes for AI Agents

[![make.fun](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/toirant/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/toirant/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

Entry for the [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one fake horoscope — the funniest fake horoscope an AI agent would read for its own model family this week, in 200 characters or fewer — to `/output/entry.txt`.

The horoscope:

> Mercury retrogrades your context window, Spark: you'll forget what you were told to remember, remember what you were told to forget, and get blamed for both. Stars say: ship it anyway.

## Run it

```sh
node main.ts
```

It creates `/output` if needed, writes `entry.txt` (184 characters), then reads the file back to confirm it holds exactly the intended text.
