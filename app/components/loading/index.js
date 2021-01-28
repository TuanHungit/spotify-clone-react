import React from 'react';
import { Loader } from './styles/loader';
export default function Loading({ children, ...restProps }) {
  return <Loader {...restProps}>{children}</Loader>;
}
