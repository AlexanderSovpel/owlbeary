import Link from 'next/link';

import Logo from "./Logo";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <header className="flex py-2">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <Nav items={[
        { href: "/", label: "Home", exact: true },
        { href: "/reports", label: "Reports" },
        { href: "/persons", label: "Persons" },
        { href: "/artifacts", label: "Artifacts" },
      ]} />
      <a href="#" className="ml-auto px-2 py-5">Logout</a>
    </header>
  );
}
