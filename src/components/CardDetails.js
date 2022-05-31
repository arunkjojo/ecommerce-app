import { Avatar, Card, Col, Row } from "antd";
import React from "react";
const CardDetails = (props) => {
    return (
        <Card bordered={false}>
            <Row>
                <Col xs={24} lg={12}>
                    <h4 className="itemTitle"> {props.item.title} </h4>
                </Col>
                <Col style={{textAlign:'right'}} xs={24} lg={12}>
                    <Row xs={24} sm={12}>
                        {props.item.green && (
                        <Col
                            
                        >
                            <Avatar
                            size={{ xs: 20, sm: 12 }}
                            style={{
                                backgroundColor: "#2ECC71",
                            }}
                            >
                            <img alt="greenLabel" src={props.item.green} />
                            </Avatar>
                        </Col>
                        )}
                        {props.item.red && (
                        <Col
                            
                        >
                            <Avatar
                            size={{ xs: 20, sm: 12 }}
                            style={{
                                backgroundColor: "#F8593B",
                            }}
                            >
                            <img alt="redLabel" src={props.item.red} />
                            </Avatar>
                        </Col>
                        )}
                        {props.item.yellow && (
                        <Col
                        >
                            <Avatar
                            size={{ xs: 20, sm: 12 }}
                            style={{
                                backgroundColor: "#FFC22B",
                            }}
                            >
                            <img alt="yellowLabel" src={props.item.yellow} />
                            </Avatar>
                        </Col>
                        )}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="itemDescription">
                {props.item.description}
                </Col>
            </Row>

            <Row
                className="calory-celcius-pfc"
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                }}
            >
                <Col md={24} lg={8} xl={6}>
                    <div>{props.item.calory} Cal</div>
                </Col>
                <Col md={24} lg={8} xl={12}>
                    <div>P/F/C: {props.item.pfc}</div>
                </Col>
                <Col md={24} lg={8} xl={6}>
                    <div>{props.item.celcius} °C</div>
                </Col>
            </Row>
            <Row
                className="prize-button"
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                }}
            >
                <Col xs={12} lg={6}>
                    <div className="new-prize">${props.item.newPrize}</div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="old-prize">${props.item.oldPrize}</div>
                </Col>
                <Col xs={24} lg={12}>
                    <button className="order-button">
                        Order
                    </button>
                </Col>
            </Row>
        </Card>
    );
};

export default CardDetails;
