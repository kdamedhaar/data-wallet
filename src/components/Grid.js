import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './Component.css'


export default function Grid(props) {

    function renderCard(data) {
        return (
            <div class="card">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <p>{data.price} OCEAN</p>
                <p>{data.max} DT</p>
                <p>Author - {data.author}</p>
                <p><a href={data.sample}>Download Sample</a></p>
            </div>
        )
    }

    function renderRow(el1 = {}, el2 = {}, el3 = {}) {
        return (
            <Row>
                <Col sm={4} lg={4}>
                    {renderCard(el1)}
                </Col>
                <Col sm={4} lg={4}>
                    {renderCard(el2)}
                </Col>
                <Col sm={4} lg={4}>
                    {renderCard(el3)}
                </Col>
            </Row>
        )
    }

    return (
        <>

            <Container style={{ width: '80%' }}>
                {props.data.map((item, i) => {
                    if (((i + 1) % 3 == 0) && i <= props.data.length) {
                        return renderRow(props.data[i], props.data[i + 1], props.data[i + 2])
                    }
                })}
            </Container >



        </>
    )
}
