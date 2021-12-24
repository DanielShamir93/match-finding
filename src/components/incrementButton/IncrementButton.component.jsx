import { useDispatch } from "react-redux";
import { BiLike, BiDislike } from 'react-icons/bi';
import { incrementAction } from "../../store/actions/actions.js";
import { INCREMENT_POSITIVE } from '../../store/actions/actionsTypes.js';
import './incrementButton.styles.css';

export default function IncrementButton({ actionType, nextImage }) {

  const dispatch = useDispatch();

  return (
      <div
          onClick={() => {
            dispatch(incrementAction(1, nextImage, actionType));
          }}
        >
          {actionType === INCREMENT_POSITIVE ? <BiLike className="react-icon-positive"/> : <BiDislike className="react-icon-negative"/>}
      </div>
  );
}