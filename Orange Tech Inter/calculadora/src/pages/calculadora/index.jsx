import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import TextArea from "../../components/TextArea";
import { BoxCalculator, Row } from "./style";

const Calculadora = () => {

    const [firstNumber, setFirstNumber] = React.useState('0');
    const [secondNumber, setSecondNumber ] = React.useState(null);
    const [operator, setOperator ] = React.useState('');

    const handleWriteNumber = (value) => {
        if (secondNumber === "0") {
            setSecondNumber(firstNumber);
            setFirstNumber("0");
        }
        setFirstNumber((prev) => prev === "0" ? `${value}` : `${prev}${value}`);
    };

    const handleClearNumber = () => {
        setFirstNumber("0");
        setSecondNumber(null);
        setOperator("");
    };

    const handleAction = (value) => {

        setOperator(value);

        if (secondNumber === null) {
            setSecondNumber(firstNumber);
            setFirstNumber("0");
        } else {
            handleResult(value);
        }
    };

    const handleResult = (value) => {
        let operations = {
            '+': (a,b) => (+a)+(+b),
            '-': (a,b) => (+a)-(+b),
            '/': (a,b) => (+a)/(+b),
            'x': (a,b) => (+a)*(+b),
        }

        if(operator in operations){
            
            let result = operations[operator](secondNumber, firstNumber);
            
            setFirstNumber(result);
            setSecondNumber('0');
            
            if(value === '='){
                setOperator('');
            }
        }

    }


    return (
        <>
            <Container>
                <BoxCalculator>
                    <Row>
                        <TextArea value={firstNumber}/>
                    </Row>
                    <Row>
                        <Button color="gray" title="0" action={handleWriteNumber} />
                        <Button color="gray" title="C" action={handleClearNumber}/>
                        <Button color="gray" title="=" action={handleResult}/>
                        <Button color="orange" title="+" action={handleAction}/>
                    </Row>
                    <Row>
                        <Button color="dark-gray" title="7" action={handleWriteNumber} />
                        <Button color="dark-gray" title="8" action={handleWriteNumber} />
                        <Button color="dark-gray" title="9" action={handleWriteNumber} />
                        <Button color="orange" title="-" action={handleAction}/>
                    </Row>
                    <Row>
                        <Button color="dark-gray" title="4" action={handleWriteNumber} />
                        <Button color="dark-gray" title="5" action={handleWriteNumber} />
                        <Button color="dark-gray" title="6" action={handleWriteNumber} />
                        <Button color="orange" title="/" action={handleAction}/>
                    </Row>

                    <Row>
                        <Button color="dark-gray" title="1" action={handleWriteNumber} />
                        <Button color="dark-gray" title="2" action={handleWriteNumber} />
                        <Button color="dark-gray" title="3" action={handleWriteNumber} />
                        <Button color="orange" title="x" action={handleAction}/>
                    </Row>
                </BoxCalculator>
            </Container>
        </>
    );
};

export default Calculadora;
