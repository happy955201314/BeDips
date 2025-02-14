import React from 'react';
import { Alert, Row, Col } from 'react-bootstrap'

const style = {
    alertText: {
        fontSize: '1.2rem',
        fontWeight: 700
    },
    alertTextTitle: {
        fontSize: '1.2rem',
        fontWeight: 1000,
        color: 'rgba(101, 111, 121, 0.78)'
    }
}

const InfoPrompt = ({
    data,
    title
}) => {
    return (
        <Alert variant='secondary' className='d-flex justify-content-start'>
            <div className='text-capitalize' style={style.alertTextTitle}>{title}</div>
            &nbsp;
            &nbsp;
            {Object.keys(data).map((item, index) => {
                return (
                    <Row className='d-flex justify-content-start no-gutters' key={index}>
                        <div style={style.alertText}>
                            {data[item]}
                        </div>
                        &nbsp;
                        <div>
                            {item}
                        </div>
                        &nbsp;
                        &nbsp;
                    </Row>
                )
            })}
        </Alert>
    )

}

export default InfoPrompt