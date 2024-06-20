import styled from "styled-components";

export const ButtonView = styled.button`
  background-color: ${props => (props.filled ? props.bg : '#fff')};
  color: ${props => (props.filled ? props.color : '#000')};
  border: ${props => (props.filled ? 'none' : '1px solid #000')};
  padding: 10px 20px;
`;

ButtonView.defaultProps = {
  bg: '#fff',
  color: '#000',
  filled: false,
};