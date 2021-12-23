import { useSelector } from 'react-redux';

export default function Counter({ type }) {

    const status = useSelector((state) => {
        return {
            positiveIncrement: state.positiveIncrement, 
            negativeIncrement: state.negativeIncrement
        };
    });

    return (

        <div>
            <h1>{type === "positive" ? status.positiveIncrement : status.negativeIncrement}</h1>
        </div>

    );

}