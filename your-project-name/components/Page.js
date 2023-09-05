import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { useRouter } from 'next/router';
import PageStyle from '/styles/pageStyles.js';

export default function Page({ children, cool, wgprop }) {

  const route = useRouter();

  return (
    <>
      <Header />
      <PageStyle>{children}</PageStyle>
      <div className="devNote">something page componenet</div>
      <p>{wgprop.name}</p>
    </>
  );
}

Page.propTypes = {
  wgprop: PropTypes.object,
  cool: PropTypes.string,
  children: PropTypes.any,
};