import { useDispatch } from 'react-redux';
import { incrementNegative, incrementPositive } from '../store/actions/actions.js';

export default function IncrementButton({ type, nextImage }) {

    const dispatch = useDispatch();
    const increment = type === 'positive' ? incrementPositive : incrementNegative;

    return (

        <div>
            <button
                onClick={() => {
                    dispatch(increment(1, nextImage))
                }
            }>+</button>
        </div>

    );

}