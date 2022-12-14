import { connect } from "react-redux";
import { ICardInfo } from "../../interfaces/baseInterfaces";
import { makeGetCommentsByCardId } from "../../redux/ducks/comments";
import { RootState } from "../../redux/store";
import CardPopup from "./CardPopup";
import { deleteCard } from "../../redux/ducks/cards";
import { makeGetCardById } from "../../redux/ducks/cards/selectors";
import { getColumnByIdSelector } from "../../redux/ducks/columns/selectors";

const makeMapStateToProps = () => {
    const getCommentsByCardId = makeGetCommentsByCardId();
    const getCardByColumnId = makeGetCardById();

    const mapStateToProps = (state: RootState, props: ICardInfo) => {
        return {
            comments: getCommentsByCardId(state, props),
            currentCard: getCardByColumnId(state, props),
            columnName: getColumnByIdSelector(state, props)?.name,
            cardId: props.cardId,
            columnId: props.columnId,
        };
    };
    return mapStateToProps;
};

const mapDispatchToProps = (
    dispatch: (arg0: { payload: number; type: "cards/deleteCard" }) => void
) => {
    return {
        onDeleteCard: (cardId: number) => {
            dispatch(deleteCard(cardId));
        },
    };
};

const CardPopupContainer = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(CardPopup);

export default CardPopupContainer;
