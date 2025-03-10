---
title: into binary
version: 0.66.1
usage: |
  Convert value to a binary primitive
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> into binary ...rest```

## Parameters

 -  `...rest`: column paths to convert to binary (for table input)

## Examples

convert string to a nushell binary primitive
```shell
> 'This is a string that is exactly 52 characters long.' | into binary
```

convert a number to a nushell binary primitive
```shell
> 1 | into binary
```

convert a boolean to a nushell binary primitive
```shell
> true | into binary
```

convert a filesize to a nushell binary primitive
```shell
> ls | where name == LICENSE | get size | into binary
```

convert a filepath to a nushell binary primitive
```shell
> ls | where name == LICENSE | get name | path expand | into binary
```

convert a decimal to a nushell binary primitive
```shell
> 1.234 | into binary
```
