---
title: get
version: 0.66.1
usage: |
  Creates dataframe with the selected columns
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> get ...rest```

## Parameters

 -  `...rest`: column names to sort dataframe

## Examples

Returns the selected column
```shell
> [[a b]; [1 2] [3 4]] | into df | get a
```
