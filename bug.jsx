```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is incorrect and should be a cleanup function
    return () => {
        //This will cause error
      setCount(10);
    };
  }, []);

  return <div>Count: {count}</div>;
} 
```