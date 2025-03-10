# Nu map from other shells and domain specific languages

The idea behind this table is to help you understand how Nu built-ins and plug-ins relate to other known shells and domain specific languages. We've tried to produce a map of all the Nu commands and what their equivalents are in other languages. Contributions are welcome.

Note: this table assumes Nu 0.43 or later.


| Nushell                | SQL                           | .Net LINQ (C#)                                       | PowerShell (without external modules)      | Bash                                            |
| ---------------------- | ----------------------------- | ---------------------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| alias                  |   -                           |   -                                                  | alias                                      | alias                                           |
| append                 |   -                           | Append                                               | -Append                                    |                                                 |
| args                   |   -                           |   -                                                  |                                            |                                                 |
| autoview               |   -                           |   -                                                  |                                            |                                                 |
| math avg               | avg                           | Average                                              | Measure-Object, measure                    |                                                 |
| calc, `<math expression>` | math operators             | Aggregate, Average, Count, Max, Min, Sum             |                                            | bc                                              |
| cd                     |   -                           |   -                                                  | Set-Location, cd                           | cd                                              |
| clear                  |   -                           |   -                                                  | Clear-Host                                 | clear                                           |
| compact                |                               |                                                      |                                            |                                                 |
| config                 |   -                           |   -                                                  | $Profile                                   | vi .bashrc, .profile                            |
| cp                     |   -                           |   -                                                  | Copy-Item, cp, copy                        | cp                                              |
| date                   | NOW() / getdate()             | DateTime class                                       | Get-Date                                   | date                                            |
| debug                  |                               |                                                      |                                            |                                                 |
| default                |                               |                                                      |                                            |                                                 |
| drop                   |                               |                                                      |                                            |                                                 |
| du                     |   -                           |   -                                                  |                                            | du                                              |
| each                   | cursor                        |                                                      | ForEach-Object, foreach, for               |                                                 |
| echo                   | print, union all              |   -                                                  | Write-Output, write                        | echo                                            |
| enter                  |   -                           |   -                                                  |                                            |                                                 |
| exit                   |   -                           |                                                      | exit                                       | exit                                            |
| fetch                  |   -                           | HttpClient,WebClient, HttpWebRequest/Response        | Invoke-WebRequest                          | wget                                            |
| first                  | top, limit                    | First, FirstOrDefault                                | Select-Object -First                       | head                                            |
| format                 |                               | String.Format                                        | String.Format                              |                                                 |
| from                   | import flatfile, openjson, cast(variable as xml) |   -                               | Import/ConvertFrom-{Csv,Xml,Html,Json}     |                                                 |
| get                    |                               | Select                                               | (cmd).column                               |                                                 |
| group-by               | group by                      | GroupBy, group                                       | Group-Object, group                        |                                                 |
| headers                |                               |                                                      |                                            |                                                 |
| help                   | sp_help                       |   -                                                  | Get-Help, help, man                        | man                                             |
| histogram              |   -                           |   -                                                  |                                            |                                                 |
| history                |   -                           |   -                                                  | Get-History, history                       | history                                         |
| inc(`*`)               |   -                           |                                                      |   -                                        |   -                                             |
| is_empty               | is null                       | String.InNullOrEmpty                                 | String.InNullOrEmpty                       |                                                 |
| keep, =take            | top, limit                    | Take                                                 | Select-Object -First                       | head                                            |
| keep-until             |                               |                                                      |                                            |                                                 |
| keep-while             |                               | TakeWhile                                            |                                            |                                                 |
| kill                   |   -                           |   -                                                  | Stop-Process, kill                         | kill                                            |
| last                   |                               | Last, LastOrDefault                                  | Select-Object -Last                        | tail                                            |
| length                 | count                         | Count                                                | Measure-Object, measure                    | wc                                              |
| lines                  |   -                           |   -                                                  | File.ReadAllLines                          |                                                 |
| ls                     |   -                           |   -                                                  | Get-ChildItem, dir, ls                     | ls                                              |
| match(`*`)             | case when                     | Regex.IsMatch                                        | [regex]                                    |                                                 |
| merge                  |                               |                                                      |                                            |                                                 |
| mkdir                  |   -                           |   -                                                  | mkdir, md                                  | mkdir                                           |
| mv                     |   -                           |   -                                                  | Move-Item, mv, move, mi                    | mv                                              |
| next                   |                               |                                                      |                                            |                                                 |
| nth                    | limit x offset y, rownumber = | ElementAt                                            | [x], indexing operator, ElementAt          |                                                 |
| open                   |                               |                                                      | Get-Content, gc, cat, type                 | cat                                             |
| parse                  |                               |                                                      |                                            |                                                 |
| transpose              | pivot                         |   -                                                  |                                            |                                                 |
| post(`*`)              |   -                           | HttpClient,WebClient, HttpWebRequest/Response        | Invoke-WebRequest                          |                                                 |
| prepend                |                               |                                                      |                                            |                                                 |
| prev                   |                               |                                                      |                                            |                                                 |
| ps(`*`)                |   -                           |   -                                                  | Get-Process, ps, gps                       | ps                                              |
| pwd                    |   -                           |   -                                                  | Get-Location, pwd                          | pwd                                             |
| range                  |                               | Range                                                | 1..10, 'a'..'f'                            |                                                 |
| reduce                 |                               | Aggregate                                            |                                            |                                                 |
| reject                 |                               |                                                      |                                            |                                                 |
| rename                 |   -                           |   -                                                  | Rename-Item, ren, rni                      | mv                                              |
| reverse                |                               | Reverse                                              | [Array]::Reverse($var)                     |                                                 |
| rm                     |   -                           |   -                                                  | Remove-Item, del, erase, rd, ri, rm, rmdir | rm                                              |
| save                   |   -                           |   -                                                  | Write-Output, Out-File                     | > foo.txt                                       |
| select                 | select                        | Select                                               | Select-Object, select                      |                                                 |
| shells                 |   -                           |   -                                                  |   -                                        |                                                 |
| shuffle                |                               | Random                                               | Sort-Object {Get-Random}                   |   -                                             |
| size                   |                               |                                                      | Measure-Object, measure                    | wc                                              |
| skip                   | where row_number()            | Skip                                                 | Select-Object -Skip                        |                                                 |
| skip until             |                               |                                                      |                                            |                                                 |
| skip while             |                               | SkipWhile                                            |                                            |                                                 |
| sort-by                | order by                      | OrderBy, OrderByDescending, ThenBy, ThenByDescending | Sort-Object, sort                          |                                                 |
| split-by               |                               | Split                                                | Split                                      |                                                 |
| split column           |                               |   -                                                  |                                            |                                                 |
| split row              |                               |   -                                                  |                                            |                                                 |
| str(`*`)               | string functions              | String class                                         | String class                               |                                                 |
| str collect            | concat_ws                     | Join                                                 | Join-String                                |                                                 |
| str trim               | rtrim, ltrim                  | Trim, TrimStart, TrimEnd                             | Trim                                       |                                                 |
| sum                    | sum                           | Sum                                                  | Measure-Object, measure                    |                                                 |
| sys(`*`)               |   -                           |   -                                                  | Get-ComputerInfo                           | uname, lshw, lsblk, lscpu, lsusb, hdparam, free |
| table                  |                               |                                                      | Format-Table, ft, Format-List, fl          |                                                 |
| tags                   |   -                           |   -                                                  |   -                                        |                                                 |
| textview(`*`)          |   -                           |   -                                                  | Get-Content, cat                           |                                                 |
| tree(`*`)              |   -                           |   -                                                  | tree                                       |                                                 |
| to                     |   -                           |   -                                                  | Export/ConvertTo-{Csv,Xml,Html,Json}       |                                                 |
| touch                  |   -                           |   -                                                  | Set-Content                                | touch                                           |
| uniq                   | distinct                      | Distinct                                             | Get-Unique, gu                             | uniq                                            |
| upsert                 | As                            |   -                                                  |                                            |                                                 |
| version                | select @@version              |   -                                                  | $PSVersionTable                            |                                                 |
| with_env               |   -                           |   -                                                  | $env:FOO = 'bar'                           | export foo = "bar"                              |
| where                  | where                         | Where                                                | Where-Object, where, "?" operator          |                                                 |
| which                  |   -                           |   -                                                  |   -                                        | which                                           |
| wrap                   |                               |                                                      |                                            |                                                 |

* `*` - these commands are part of the standard plugins
