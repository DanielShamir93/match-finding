import { useDispatch } from 'react-redux';
import { incrementNegative, incrementPositive } from '../actions/actions.js';

export default function IncrementButton({ type }) {

    const dispatch = useDispatch();
    const action = type === 'positive' ? incrementPositive : incrementNegative;

    return (

        <div>
            <button onClick={() => {
                dispatch(action());
            }}>+</button>
        </div>

    );

}