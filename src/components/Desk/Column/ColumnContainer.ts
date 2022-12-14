import { connect } from "react-redux";
import { makeGetCardsByColumnId } from "../../../redux/ducks/cards/selectors";
import { RootState } from "../../../redux/store";
import Column from "./Column";

interface IProps {
    id: number;
    name: string;
}

const makeMapStateToProps = () => {
    const getCardsByColumnId = makeGetCardsByColumnId();

    const mapStateToProps = (state: RootState, props: IProps) => {
        return {
            cards: getCardsByColumnId(state, { columnId: props.id }),
            id: props.id,
            name: props.name,
        };
    };
    return mapStateToProps;
};

const CardPopupContainer = connect(makeMapStateToProps)(Column);

export default CardPopupContainer;
