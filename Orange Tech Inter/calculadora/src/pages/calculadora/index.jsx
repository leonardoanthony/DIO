import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import TextArea from "../../components/TextArea";
import { BoxCalculator, Row } from "./style";

const Calculadora = () => {
    return (
        <>
            <Container>
                <BoxCalculator>
                    <Row>
                        <TextArea />
                    </Row>
                    <Row>
                        <Button color="gray" title="0" />
                        <Button color="gray" title="C" />
                        <Button color="gray" title="=" />
                        <Button color="orange" title="+" />
                    </Row>
                    <Row>
                        <Button color="dark-gray" title="7" />
                        <Button color="dark-gray" title="8" />
                        <Button color="dark-gray" title="9" />
                        <Button color="orange" title="-" />
                    </Row>
                    <Row>
                        <Button color="dark-gray" title="4" />
                        <Button color="dark-gray" title="5" />
                        <Button color="dark-gray" title="6" />
                        <Button color="orange" title="/" />
                    </Row>

                    <Row>
                        <Button color="dark-gray" title="1" />
                        <Button color="dark-gray" title="2" />
                        <Button color="dark-gray" title="3" />
                        <Button color="orange" title="x" />
                    </Row>
                </BoxCalculator>
            </Container>
        </>
    );
};

export default Calculadora;
