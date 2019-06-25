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
          This application demonstrate user authentication with Google and
          Facebook. Let&apos;s give it a try!
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: #fafafa;
  padding: 3rem;
  border-radius: 5px;
  max-width: 50rem;
  min-width: 50rem;
  font-size: 1.599rem;
  div {
    h1 {
      font-size: 2.588rem;
      margin-bottom: 1.5rem;
    }
  }
`;

Presentation.propTypes = {};

export default Presentation;
