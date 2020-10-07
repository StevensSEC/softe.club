# Pair Programming 2020

## Beginner Problems (Small Prize)

Solve this problem:

https://leetcode.com/problems/buddy-strings/

And **one** of these:

-   https://www.codingame.com/ide/puzzle/brackets-extreme-edition
-   https://www.codingame.com/ide/puzzle/mars-lander-episode-1

## Advanced Problem (Big Prize)

You are the main computer on the USS Enterprise. Lt. Cmdr Data has malfunctioned and is no longer able to see or hear! Since the transporters are down, he needs to navigate all the way to Main Engineering using only touch and what he knows about the starship’s layout. You need to know what path Data is going to take, so you can keep his path clear. Data provides you with the logic that he has used to program himself, and you retrieve a map of the ship from your data banks.

Data has programmed himself with these rules:

-   Data starts from the place indicated by the `@` symbol on the map and heads `SOUTH`.
    Obstacles that Data may encounter are represented by `#`.
-   When Data encounters an obstacle, he changes direction using the following priorities: `SOUTH`, `EAST`, `NORTH` and `WEST`. So he first tries to go `SOUTH`, if he cannot, then he will go `EAST`, if he still cannot, then he will go `NORTH`, and finally if he still cannot, then he will go `WEST`.
-   Along the way, Data may come across path modifiers that will instantaneously make him change direction. The `S` modifier will make him turn `SOUTH` from then on, `E`, to the EAST, `N` to the `NORTH` and `W` to the `WEST`.
-   The circuit inverters (`I` on map) produce a magnetic field which will reverse the direction priorities that Data should choose when encountering an obstacle. Priorities will become `WEST`, `NORTH`, `EAST`, `SOUTH`. If Data returns to an inverter `I`, then priorities are reset to their original state (`SOUTH`, `EAST`, `NORTH`, `WEST`).

Your answer should be a string of capital letters `N`, `S`, `E`, `W`, (representing the 4 cardinal directions) that describes the path Data will take, according to the rules above.

Here is an example to test your solution:

```
#####
#@  #
# E #
# N$#
#####
```

Answer: `SSENES`

**What is the path Data will take on this map?**

Hint: You should **not** use a path finding algorithm.

```
####################
#  I  #I#NNINS#S####
## E#IWE      SNWN##
#ENW@II I#ENNWISNEE#
#I# WI#   S SE EINI#
#N WEEI # I# SIS#NE#
#N#    I       #WSN#
#SS W#EIII#S#N#NN#S#
#I# #EIE  #WIENISIN#
#EEI SE## ##IE     #
#E I IIS###IN WN# W#
# I   S  I      IW##
# NWS# EI    NESESW#
#   I   I #NISEWIS##
###EES  WISNSW #ENN#
#EI#NI N  NSI$N#WIS#
# I     S#NNSIE#NSW#
##E ##ISIWI#I NE#IE#
#SSN   #  I  NW#S#W#
####################
```
