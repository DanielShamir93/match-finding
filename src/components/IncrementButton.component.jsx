import { useDispatch } from 'react-redux';
import { incrementNegative, incrementPositive } from '../actions/actions.js';

export default function IncrementButton({ type, nextImg }) {

    const dispatch = useDispatch();
    const action = type === 'positive' ? incrementPositive : incrementNegative;

    return (

        <div>
            <button onClick={() => {
                dispatch(action());
                nextImg();
            }}>+</button>
        </div>

    );

}