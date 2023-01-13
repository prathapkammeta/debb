import "./styles.css";
import { useState, useEffect } from "react";
import { useDebounce } from "./hooks";
export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  useEffect(() => {
    console.log(`api ${debouncedValue} `);
  }, [value]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        name="name"
      />
    </div>
  );
}
