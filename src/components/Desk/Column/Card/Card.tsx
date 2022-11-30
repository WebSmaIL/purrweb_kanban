import React from 'react'
import { card as IProps } from '../../../../interfaces/baseInterfaces'
import view from '../../../../assets/view.svg'
import comment from '../../../../assets/comment.svg'
import Styles from './style'

const Card = ({id, name, description, comments}: IProps) => {
  return (
    <Styles.CardContainer>
        <Styles.TitleContainer>
            <Styles.CardTitle>{name}</Styles.CardTitle>
            <Styles.ViewButton><img src={view} alt="" /></Styles.ViewButton>
        </Styles.TitleContainer>
        <Styles.CommentContainer>
            <img src={comment} alt="" />
            <span>{comments.length}</span>
        </Styles.CommentContainer>
    </Styles.CardContainer>
  )
}

export default Card