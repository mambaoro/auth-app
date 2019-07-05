/**
 *
 * SignUser
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import GoogleBtn from '../GoogleButton';
import GithubBtn from '../GitHubBtn';
import LogoutBtn from '../LogoutBtn';

function SignUser() {
  const [user, setUserData] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('/getUser');
      // eslint-disable-next-line no-unused-expressions
      res.data.username && setUserData(res.data);
      console.log(res);
    };
    getUser();
  }, []);
  return (
    <Main>
      {!user && (
        <div>
          <h2>Sign-in with Google or GitHub</h2>
          <section>
            <GoogleBtn />
            <GithubBtn />
          </section>
        </div>
      )}
      {!user && <p>You are not logged in</p>}
      {user && (
        <ArticleUserDetails>
          <h2>Hi, {user && user.username}! You are logged in</h2>
          <div>
            <img
              src={
                (user && user.profileImageUrl) ||
                "You profile picture should be display here, nothing will appear if you don't have one."
              }
              alt="user"
            />
          </div>
        </ArticleUserDetails>
      )}
      {user && (
        <div>
          <LogoutBtn>Log out</LogoutBtn>
        </div>
      )}
    </Main>
  );
}

const Main = styled.main`
  position: fixed;
  bottom: 15%;
  right: 15%;
  background-color: var(--color-bg-secondary);
  color: #fafafa;
  padding: 3rem;
  border-radius: 5px;
  max-width: 50rem;
  min-width: 50rem;
  font-size: 1.599rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  z-index: 1;
  text-align: center;
  div {
    h2 {
      margin-bottom: 1.5rem;
    }
  }
  p {
    margin-top: 1.5rem;
  }
`;

const ArticleUserDetails = styled.article`
  div {
    margin: 0 auto;
    img {
      margin-top: 1.5rem;
      height: 15rem;
    }
  }
`;

SignUser.propTypes = {};

export default SignUser;
