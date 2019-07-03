/* eslint-disable prettier/prettier */
/**
 *
 * LogoutBtn
 *
 */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function LogoutBtn() {
  const handleLogout = async e => {
    e.preventDefault();
    await axios.get('/auth/logout');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return <Button type="button" onClick={handleLogout}>Log out</Button>;
}

const Button = styled.button`
  display: inline-block;
  background-color: #fafafa;
  border-left: none;
  height: 4rem;
  min-width: 19.7rem;
  padding-right: 0.7rem;
  padding-left: 0.7rem;
  font-weight: bold;
  font-size: 1.4rem;
  color: #000000;
  text-decoration: none;
  font-family: Oswald, tahoma, verdana, arial, sans-serif;
  line-height: 2.2rem;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  margin-top: 1.5rem;
  cursor: pointer;
  :hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default LogoutBtn;
