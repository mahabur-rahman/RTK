export default function Button({ children, handler }) {
  return <button onClick={handler}>{children}</button>;
}
