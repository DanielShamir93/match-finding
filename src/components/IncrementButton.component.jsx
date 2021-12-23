import { useDispatch } from 'react-redux';
import { incrementNegative, incrementPositive } from '../actions/actions.js';

export default function IncrementButton(props) {

    const dispatch = useDispatch();
    const action = props.type === 'positive' ? incrementPositive : incrementNegative;

    return (

        <div>
            <button onClick={() => {
                dispatch(action());
                
            }}>+</button>
        </div>

    );

}