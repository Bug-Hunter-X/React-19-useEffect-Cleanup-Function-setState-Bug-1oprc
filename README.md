# React 19 useEffect Cleanup Function setState Bug
This repository demonstrates a potential bug in React 19 related to using `setState` within the cleanup function of a `useEffect` hook that has an empty dependency array.  Attempting to update state after a component has unmounted can cause unexpected behavior or errors. The solution focuses on correctly handling cleanup within the `useEffect` hook, ensuring the component behaves as expected.

## Bug Description
In React 19, calling `setState` inside the cleanup function of `useEffect` with an empty dependency array ([]), can lead to issues because the component might already be unmounted by the time the state update is processed. This can lead to warnings or errors in the console.