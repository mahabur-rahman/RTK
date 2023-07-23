import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
