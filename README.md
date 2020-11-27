# notReact
The code in this repository is for my [dev.to article](https://dev.to/maturc/recreating-the-react-workflow-in-vanilla-javascript-449c) about recreating React in vanilla JavaScript in order to achive a similar worflow.

The file `notReact.ts` contains all of the rendering and state handeling logic, everything else is just an example of a simple counter application.

## The finished counter component looks like this:
```tsx
import * as elements from 'typed-html';
import { notReact } from '../notReact';

const Counter = () => {
  const [count, setCount] = notReact.useState(0);
  
  const increaseCounter = () => {
    setCount(count+1);
  }
  notReact.addOnClick("increaseCount", increaseCounter);
  
  let isHigherThan10: string;
  notReact.useEffect(()=>{
    isHigherThan10 =  count > 5 ? "Yes" : "No";
  }, [count, isHigherThan10]);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button id="increaseCount">Increase count</button>
      <p>Is the count higher than 5? <strong>{isHigherThan10}!</strong></p>
    </div>
  );
}

export default Counter;
```
