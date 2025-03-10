---
title: hide
version: 0.66.1
usage: |
  Hide symbols in the current scope
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> hide (pattern)```

## Parameters

 -  `pattern`: import pattern

## Notes
```text
Symbols are hidden by priority: First aliases, then custom commands, then environment variables.

This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
```
## Examples

Hide the alias just defined
```shell
> alias lll = ls -l; hide lll
```

Hide a custom command
```shell
> def say-hi [] { echo 'Hi!' }; hide say-hi
```

Hide an environment variable
```shell
> let-env HZ_ENV_ABC = 1; hide HZ_ENV_ABC; 'HZ_ENV_ABC' in (env).name
```
