/**
 *
 * Presentation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Presentation() {
  return (
    <Section>
      <div>
        <h1>Hi, Mamadou Baoro here!</h1>
        <p>
          This application demonstrates user authentication with Google and
          GitHub. Give it a try!
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: fixed;
  top: 15%;
  left: 15%;
  background-color: rgba(250, 250, 250);
  padding: 3rem;
  border-radius: 5px;
  max-width: 50rem;
  min-width: 50rem;
  font-size: 1.599rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  div {
    h1 {
      font-size: 2.588rem;
      margin-bottom: 1.5rem;
    }
  }
`;

Presentation.propTypes = {};

export default Presentation;
