import Link from 'next/link';

export default function Nav(props) {
  const { items = [] } = props;

  return (
    <nav className="flex">
      {items.map((item, i) => (
        <Link key={i} href={item.href}>
          <a className="px-2 py-5">{item.label}</a>
        </Link>
      ))}
    </nav>
  );
}
