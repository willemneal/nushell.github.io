---
title: window
version: 0.66.1
usage: |
  Creates a sliding window of `window_size` that slide by n rows/elements across input.
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> window (window_size) --stride```

## Parameters

 -  `window_size`: the size of each window
 -  `--stride {int}`: the number of rows to slide over between windows

## Examples

A sliding window of two elements
```shell
> echo [1 2 3 4] | window 2
```

A sliding window of two elements, with a stride of 3
```shell
> [1, 2, 3, 4, 5, 6, 7, 8] | window 2 --stride 3
```
