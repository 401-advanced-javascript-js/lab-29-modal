export default function ifMethod(props) {
  if (props && props.condition) {
    return props.children;
  }
  return null;
}
