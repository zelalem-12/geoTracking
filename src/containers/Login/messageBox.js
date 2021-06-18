import React from 'react';
import styled from 'styled-components';
import { Color, FontSize } from '../../constants/base';

const Box = styled.div`
  text-align: center;
  color: ${props =>
    props.status === 'success' ? Color.Success : Color.Failure};
  border: 1px solid
    ${props => (props.status === 'success' ? Color.Success : Color.Failure)};
  padding: 10px;
  font-size: ${FontSize.Small};
  margin: 20px 0;
`;

const MessageBox = props => {
  const { messages, status } = props;

  const messagesText = messages.map((message, index) => {
    return <p key={index}>{message}</p>;
  });

  return <Box status={status}>{messagesText}</Box>;
};

export default MessageBox;
