/**
 *
 * SignUser
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleBtn from '../GoogleButton';
import FacebookBtn from '../FacebookButton';

function SignUser() {
  return (
    <Main>
      <div>
        <h2>Sign-in using either Google or Facebook</h2>
        <section>
          <GoogleBtn />
          <FacebookBtn />
        </section>
      </div>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  bottom: 25%;
  right: 25%;
  background-color: var(--color-bg-secondary);
  color: #fafafa;
  padding: 3rem;
  border-radius: 5px;
  max-width: 50rem;
  min-width: 50rem;
  font-size: 1.599rem;
  div {
    h2 {
      margin-bottom: 1.5rem;
    }
  }
`;

SignUser.propTypes = {};

export default SignUser;
