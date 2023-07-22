import Button from "./Button";
import Count from "./Count";

export default function Counter({ id, count, increment, decrement }) {
  return (
    <div>
      <Count count={count} />
      <div>
        <Button handler={() => increment(id)}>Increment</Button>
        <Button handler={() => decrement(id)}>Decrement</Button>
      </div>
    </div>
  );
}
