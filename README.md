# React useEffect Infinite Loop

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook. The bug is caused by incorrectly updating state within the effect's dependency array, leading to an infinite loop of rerenders.

## Bug Description

The `MyComponent` attempts to reset the `count` state to 0 when it exceeds 5. However, this approach is flawed. Updating `count` inside the effect triggers another render, and the condition `count > 5` keeps evaluating to true, creating an endless loop. 

## Solution

The solution involves restructuring the logic. Instead of directly updating state inside the effect, we should use a flag to determine whether the count should reset on the next state update.