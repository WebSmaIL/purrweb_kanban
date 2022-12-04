import React from 'react';
import {CommentContainer, Author, Content} from './style';

interface IProps {
    author: string,
    content: string
}

const Comment = ({author, content}: IProps) => {
  return (
    <CommentContainer>
        <Author>From <i>{author}</i></Author>
        <Content>{content}</Content>
    </CommentContainer>
  )
}

export default Comment