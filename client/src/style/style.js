import styled from 'styled-components'

export const TryAgainButton = styled.div`
  font-size: 32px;
  font-family: "Courier New", monospace;
  border: 2px solid #000;
  background-color: #fff;
  padding: 10px 25px;
  transition: .3s ease-in-out;

  &:hover {
    background-color: #fdd836;
  }

  &:active {
    background-color: #ffefa9;
  }
`