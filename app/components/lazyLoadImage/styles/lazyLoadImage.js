import styled from 'styled-components/macro';

export const Image = styled.img`
  display: block;
  object-fit: cover;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  @keyframes loaded {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: loaded 800ms ease-in-out;
  }

  &.has-error {
    // fallback to placeholder image on error
    content: url(${({ placeHolder }) => placeHolder});
  }
`;
