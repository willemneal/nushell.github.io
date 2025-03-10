---
title: default
version: 0.66.1
usage: |
  Sets a default row's column if missing.
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> default (default value) (column name)```

## Parameters

 -  `default value`: the value to use as a default
 -  `column name`: the name of the column

## Examples

Give a default 'target' column to all file entries
```shell
> ls -la | default 'nothing' target
```

Get the env value of `MY_ENV` with a default value 'abc' if not present
```shell
> $env | get -i MY_ENV | default 'abc'
```

Default the `$nothing` value in a list
```shell
> [1, 2, $nothing, 4] | default 3
```
