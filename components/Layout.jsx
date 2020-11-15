// import styles from './Layout.module.css';

export default function Layout(props) {
  return (
    <section className="container px-4 mx-auto h-full">{props.children}</section>
  );
}