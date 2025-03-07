---
title: drop nth
version: 0.66.1
usage: |
  Drop the selected rows.
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> drop nth (row number or row range) ...rest```

## Parameters

 -  `row number or row range`: the number of the row to drop or a range to drop consecutive rows
 -  `...rest`: the number of the row to drop

## Examples

Drop the first, second, and third row
```shell
> [sam,sarah,2,3,4,5] | drop nth 0 1 2
```

Drop the first, second, and third row
```shell
> [0,1,2,3,4,5] | drop nth 0 1 2
```

Drop rows 0 2 4
```shell
> [0,1,2,3,4,5] | drop nth 0 2 4
```

Drop rows 2 0 4
```shell
> [0,1,2,3,4,5] | drop nth 2 0 4
```

Drop range rows from second to fourth
```shell
> echo [first second third fourth fifth] | drop nth (1..3)
```

Drop all rows except first row
```shell
> [0,1,2,3,4,5] | drop nth 1..
```

Drop rows 3,4,5
```shell
> [0,1,2,3,4,5] | drop nth 3..
```
