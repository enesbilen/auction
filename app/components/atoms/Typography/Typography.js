// src/components/atoms/Typography.js
import React from 'react';

const Typography = ({ variant, children }) => {
  switch (variant) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'p':
      return <p>{children}</p>;
    case 'span':
      return <span>{children}</span>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
