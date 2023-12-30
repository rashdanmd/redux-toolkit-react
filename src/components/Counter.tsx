import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

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
      </div>
    </div>
  );
};

export default Counter;
