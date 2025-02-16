```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to handle cleanup. Return a function to clean up any side effects.
    return () => {
      // No state updates in cleanup function
      //Instead you could log something to console or clear intervals, timeouts etc.
      console.log("Component unmounted");
    };
  }, []);

  return <div>Count: {count}</div>;
} 
```