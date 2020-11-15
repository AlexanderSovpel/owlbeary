import React from 'react';
import Link from "next/link";

export default function Breadcrumbs(props) {
  const { items = [], ...rest } = props;

  return (
    <div {...rest}>
      {items.map((item, i) => {
        return (
          <React.Fragment key={i}>
            {item.href ? (
              <Link href={item.href}>
                <a className="text-blue-500">
                  {item.label}
                </a>
              </Link>
            ) : <span>{item.label}</span>}
            {i < items.length - 1 ? ' / ' : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}