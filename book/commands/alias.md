---
title: alias
version: 0.66.1
usage: |
  Alias a command (with optional flags) to a new name
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> alias (name) (initial_value)```

## Parameters

 -  `name`: name of the alias
 -  `initial_value`: equals sign followed by value

## Notes
```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nushell.html
```
## Examples

Alias ll to ls -l
```shell
> alias ll = ls -l
```
