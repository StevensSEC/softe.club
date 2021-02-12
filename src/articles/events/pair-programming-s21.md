# Pair Programming Spring 2021

## Question 1 - 7 Segment Display

### Background Info

![Question 1 Background](pair-programming/question-3-1.png)

The letters A through G represent different segments on the seven-segment display. A series of eight bits encodes the state of the display (i.e., which segments are illuminated).
In this problem, consider the bit encoding order of ABCDEFG. In this representation, a hexadecimal value of 0x06 would represent a display with the ‘C’ and ‘B’ segments illuminated. This pattern displays the number ‘1’.

Here is a table to describe which bit of the number coresponds to which segment.

| Bit | Segment |
| --- | ------- |
| 0   | A       |
| 1   | B       |
| 2   | C       |
| 3   | D       |
| 4   | E       |
| 5   | F       |
| 6   | G       |

### Problem

Given a hexadecimal number, determine which segments of the seven-segment display are illuminated. Output whether or not the illuminated segments represent a valid numeric digit (pictured below).

![Question 1 visualization](pair-programming/question-3-2.png)

For example, given the hexadecimal value ‘0x06’, your program should return True because 0x06 appears as a ‘1’ on the display.

| Input  | Output  |
| ------ | ------- |
| `0x06` | `True`  |
| `0x33` | `True`  |
| `0x7`  | `False` |
| `0x8`  | `False` |
| `0x77` | `False` |
| `0x7F` | `True`  |

<br/><br/>

---

## Question 2 - Strings!

Given a string s, find the longest repeating substring in it. Basically, find two identical substrings of max length. If there exists more than one such substring return any of them.

Examples:

| Input                 | Output  |
| --------------------- | ------- |
| `secisnotsec`         | `sec`   |
| `boo`                 | `o`     |
| `aabaabaaba`          | `aaba`  |
| `zzzzzzzzzz` (10 z's) | `zzzzz` |

<br/><br/>

---

## Question 3 - Pairing Programmers

You’re in charge of hosting a Pair Programming event but your members are all of different skill levels. Every member attending the event was asked to rank their programming experience from 1-5. The array below represents each member by skill level. If you can only match members with the same skill level, how many pairs can you make?

`1 2 1 4 5 2 1 2 5 2 2 4 1 3 5 2 1 2 3 1 3`

Visualization:

![Question 3 visualization](pair-programming/question-1.png)
