import React from 'react';

const Logo = React.forwardRef((props, ref) => {
  return (
    <a className="flex items-center mr-6" {...props} ref={ref}>
      <img src="/images/logo.png" className="w-16 mr-1" />
      <span className="text-3xl font-semibold">Owlbeary</span>
    </a>
  );
});

export default Logo;
