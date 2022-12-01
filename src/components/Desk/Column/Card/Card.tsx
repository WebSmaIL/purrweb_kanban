import React from 'react'
import { ICard as IProps } from '../../../../interfaces/baseInterfaces'
import view from '../../../../assets/view.svg'
import comment from '../../../../assets/comment.svg'
import { CardContainer, CardTitle, CommentContainer, TitleContainer, ViewButton } from './style'

const Card = ({id, name, description, comments}: IProps) => {
  return (
    <CardContainer>
        <TitleContainer>
            <CardTitle>{name}</CardTitle>
            <ViewButton><img src={view} alt="" /></ViewButton>
        </TitleContainer>
        <CommentContainer>
            <img src={comment} alt="" />
            <span>{comments.length}</span>
        </CommentContainer>
    </CardContainer>
  )
}

export default Card