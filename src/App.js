import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    
    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    }
    
    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }
    const handleSumNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setCurrentNumber('');
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation('');
        }
    }

    const handleMinusNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('');
            setOperation('-');
        } else {
            const minus = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(minus));
            setOperation('');
        }
    }

    const handleDivNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('');
            setOperation('/');
        } else {
            const div = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(div));
            setOperation('');
        }
    }

    const handleMultNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('');
            setOperation('*');
        } else {
            const div = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(div));
            setOperation('');
        }
    }

    const handleEquals = () => {

        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0' && currentNumber !=='.' && firstNumber !== '.' ) {
            switch (operation) {
                    case '+':
                        handleSumNumbers();
                        break;

                    case '-':
                        handleMinusNumbers();
                        break;

                    case '/':
                        handleDivNumbers();
                        break;

                    case '*':
                        handleMultNumbers();
                        break;

                    default:
                        break;
            }
        }
    }
    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                <Button label="7" onClick={() => handleAddNumber('7')}/>
                <Button label="8" onClick={() => handleAddNumber('8')}/>
                <Button label="9" onClick={() => handleAddNumber('9')}/>
                <Button label="÷" onClick={handleDivNumbers} variant="terc" />
                </Row>
                <Row>
                <Button label="4" onClick={() => handleAddNumber('4')}/>
                <Button label="5" onClick={() => handleAddNumber('5')}/>
                <Button label="6" onClick={() => handleAddNumber('6')}/>
                <Button label="-" onClick={handleMinusNumbers} variant="terc" />
                </Row>
                <Row>
                <Button label="1" onClick={() => handleAddNumber('1')}/>
                <Button label="2" onClick={() => handleAddNumber('2')}/>
                <Button label="3" onClick={() => handleAddNumber('3')}/>
                <Button label="+" onClick={handleSumNumbers} variant="terc" />
                </Row>
                <Row>
                <Button label="C" onClick={handleOnClear}/>
                <Button label="0" onClick={() => handleAddNumber('0')} variant="secondary" />
                <Button label="=" onClick={handleEquals}/>
                <Button label="x" onClick={handleMultNumbers} variant="terc" />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
