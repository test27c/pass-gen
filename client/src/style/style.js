import styled from 'styled-components'

export const TryAgainButton = styled.div`
  font-size: 32px;
  font-family: "Courier New", monospace;
  border: 2px solid #000;
  background-color: #fff;
  padding: 10px 25px;
  transition: .3s ease-in-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: #fdd836;
    cursor: pointer;
  }

  &:active {
    background-color: #ffefa9;
  }
`

export const Advertisement = styled.span`
  margin-top: 10px;
  font-size: 16px;
  font-family: "Courier New", monospace;
`