/**
 *
 * FacebookButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import facebookSmall from '../../images/facebook_small.png';

function FacebookButton() {
  return <Button type="button">Sign in with Facebook</Button>;
}

const Button = styled.div`
  display: inline-block;

  background: #627aac url(${facebookSmall}) 5% no-repeat;

  border-top: 1px solid #29447e;
  border-right: 1px solid #29447e;
  border-bottom: 1px solid #1a356e;
  border-left: none;
  height: 40px;
  min-width: 19.7rem;
  padding-right: 0.7rem;
  padding-left: 2.9rem;
  padding-top: 0.7rem;
  font-weight: bold;
  font-size: 1.1rem;
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

FacebookButton.propTypes = {};

export default FacebookButton;
