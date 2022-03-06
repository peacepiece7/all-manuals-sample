import styles from './Layout.module.css';

export default function Layout(props) {
  console.log(props.children ? props.children : 'no children');
  return <div>{props.children}</div>;
}
