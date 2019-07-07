/**
 *
 * FacebookButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function GithubButton() {
  return (
    <Link
      href={
        (process.env === 'production' &&
          'https://authapp.mambaoro.com/auth/github') ||
        '/auth/github'
      }
    >
      Sign in with GitHub
    </Link>
  );
}

const Link = styled.a`
  display: inline-block;
  background-color: #24292e;
  border-top: 1px solid #24292e;
  border-right: 1px solid #24292e;
  border-bottom: 1px solid #24292e;
  border-left: none;
  height: 40px;
  min-width: 19.7rem;
  padding-right: 0.7rem;
  padding-left: 0.7rem;
  padding-top: 0.8rem;
  font-weight: bold;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
  line-height: 2.2rem;
  vertical-align: middle;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  :hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

GithubButton.propTypes = {};

export default GithubButton;
