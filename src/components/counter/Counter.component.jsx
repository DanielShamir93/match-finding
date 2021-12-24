import { useSelector } from 'react-redux';
import { GrDocumentMissing } from "react-icons/gr";
import { INCREMENT_POSITIVE } from '../../store/actions/actionsTypes.js';
import './counter.styles.css';

export default function Counter({ actionType, reactIconComponent }) {

    const counter = useSelector((state) => {
        return {
            positiveIncrement: state.positiveIncrement, 
            negativeIncrement: state.negativeIncrement
        };
    });

    console.log(INCREMENT_POSITIVE === actionType)

    return (
        <div>
            {reactIconComponent !== '' ? reactIconComponent : <GrDocumentMissing className="react-icon"/>}
            <span className="counter-number">{actionType === INCREMENT_POSITIVE ? counter.positiveIncrement : counter.negativeIncrement}</span>
        </div>
    );
}