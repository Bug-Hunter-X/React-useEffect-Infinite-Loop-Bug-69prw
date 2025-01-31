```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setCount(0);
      setShouldReset(false);
    }
  }, [shouldReset]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1);
        if (count + 1 > 5) {
          setShouldReset(true);
        }
      }}>Increment</button>
    </div>
  );
}
```