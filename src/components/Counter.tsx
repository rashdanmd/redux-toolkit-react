import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>(); //needed when working with asynchronous functions

  const increase = () => {
    dispatch(increment());
  };

  const decrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>{count}</h2>
      <div>
        {/* <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button> */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by custum amount
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment ASYNC by custom amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
