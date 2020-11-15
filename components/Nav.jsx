import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = React.forwardRef((props, ref) => {
  const { href, exact, children } = props;

  const router = useRouter();
  const isActive = exact ? router.pathname === href : router.pathname.includes(href);
  const color = isActive ? 'text-black' : 'text-blue-500';

  return (
    <a href={href} className={`${color} px-2 py-5`} ref={ref}>{children}</a>
  );
});

export default function Nav(props) {
  const { items = [] } = props;

  return (
    <nav className="flex">
      {items.map((item, i) => (
        <Link key={i} href={item.href} passHref>
          <NavItem exact={item.exact}>{item.label}</NavItem>
        </Link>
      ))}
    </nav>
  );
}
