/*
 * HomePage
 *
 */

import React from 'react';
import styled, { css } from 'styled-components';
import busyPeople from '../../videos/Busy-People.mp4';
import Presentation from '../../components/Presentation';
import SignUser from '../../components/SignUser';

const Container = styled.div``;

const cssSharedBG = css`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
`;
const DivVideoWrapper = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
`;

const DivBGPrimary = styled.div`
  ${cssSharedBG}
  background-color: rgba(250, 250, 250, 0.8);
`;

const DivBGSecondary = styled.div`
  ${cssSharedBG}
  background-color: var(--color-bg-secondary);
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 0 100%, 0% 100%);
`;

function Homepage() {
  return (
    <Container>
      <DivVideoWrapper>
        <DivBGPrimary />
        <DivBGSecondary />
        <SignUser />
        <Presentation />
        <video autoPlay loop muted>
          <source src={busyPeople} />
        </video>
      </DivVideoWrapper>
    </Container>
  );
}

export default Homepage;
