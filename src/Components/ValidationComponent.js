import React from 'react';

const ValidationComponent = (props) => {
    let validationmessage = 'Text long';
    if(props.inputLenght <= 5)
    {
        validationmessage ='Text Short';
    }
    return (
        <div>
            <p>{validationmessage}</p>
        </div>
    )
}
export default ValidationComponent;