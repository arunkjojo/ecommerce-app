import React from "react";
// import CardDetails from "./components/CardDetails";
import { Avatar, Card, Row, Col } from "antd";
const data = [
  {
    id: "item1",
    src: "/images/Pizza.png",
    title: "Pepperoni Pizza",
    description:
      "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
    pfc: "12/10/31",
    celcius: 53.8,
    calory: 270,
    newPrize: 23.9,
    oldPrize: 29.9,

    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item2",
    src: "/images/Tortellini.png",
    title: "Tortellini",
    description:
      "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",
    pfc: "18/4/41",
    celcius: 42.4,
    calory: 265,
    newPrize: 17.9,
    oldPrize: 22.9,

    green: "/images/green.png",
    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item3",
    src: "/images/StrawberryCake.png",
    title: "Strawberry Cake",
    description:
      "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
    pfc: "6/14/49",
    celcius: 13.9,
    calory: 346,
    newPrize: 13.9,
    oldPrize: 18.9,

    yellow: "/images/wheat.png",
  },
  {
    id: "item4",
    src: "/images/Pizza.png",
    title: "Pepperoni Pizza",
    description:
      "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
    pfc: "12/10/31",
    celcius: 53.8,
    calory: 270,
    newPrize: 23.9,
    oldPrize: 29.9,

    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item5",
    src: "/images/Tortellini.png",
    title: "Tortellini",
    description:
      "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",
    pfc: "18/4/41",
    celcius: 42.4,
    calory: 265,
    newPrize: 17.9,
    oldPrize: 22.9,

    green: "/images/green.png",
    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item6",
    src: "/images/StrawberryCake.png",
    title: "Strawberry Cake",
    description:
      "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
    pfc: "6/14/49",
    celcius: 13.9,
    calory: 346,
    newPrize: 13.9,
    oldPrize: 18.9,

    yellow: "/images/wheat.png",
  },
  {
    id: "item7",
    src: "/images/Pizza.png",
    title: "Pepperoni Pizza",
    description:
      "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
    pfc: "12/10/31",
    celcius: 53.8,
    calory: 270,
    newPrize: 23.9,
    oldPrize: 29.9,

    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item8",
    src: "/images/Tortellini.png",
    title: "Tortellini",
    description:
      "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",
    pfc: "18/4/41",
    celcius: 42.4,
    calory: 265,
    newPrize: 17.9,
    oldPrize: 22.9,

    green: "/images/green.png",
    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item9",
    src: "/images/StrawberryCake.png",
    title: "Strawberry Cake",
    description:
      "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
    pfc: "6/14/49",
    celcius: 13.9,
    calory: 346,
    newPrize: 13.9,
    oldPrize: 18.9,

    yellow: "/images/wheat.png",
  },
  {
    id: "item10",
    src: "/images/Pizza.png",
    title: "Pepperoni Pizza",
    description:
      "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
    pfc: "12/10/31",
    celcius: 53.8,
    calory: 270,
    newPrize: 23.9,
    oldPrize: 29.9,

    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item11",
    src: "/images/Tortellini.png",
    title: "Tortellini",
    description:
      "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",
    pfc: "18/4/41",
    celcius: 42.4,
    calory: 265,
    newPrize: 17.9,
    oldPrize: 22.9,

    green: "/images/green.png",
    red: "/images/red.png",
    yellow: "/images/wheat.png",
  },
  {
    id: "item12",
    src: "/images/StrawberryCake.png",
    title: "Strawberry Cake",
    description:
      "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
    pfc: "6/14/49",
    celcius: 13.9,
    calory: 346,
    newPrize: 13.9,
    oldPrize: 18.9,

    yellow: "/images/wheat.png",
  },
];
const App = () => (
  <div className="site-card-wrapper">
    <Row style={{marginLeft: '0px',marginRight: '0px'}} gutter={{ xs: 12, sm: 10, md: 8 }}>
      {data.map((data, index) => (
        <Col className="cardCol" xs={24} sm={12} md={8} key={index}>
          <div className="elips">
            <img src="/images/i-icon.png" alt="info" className="info" />
          </div>
          <Card
            cover={<img alt={data.title} src={data.src} />}
            bordered={false}
            className="cardDetails"
          >
            {/* <CardDetails item={data} /> */}
            {/* <Card className="cardDetails" bordered={false}> */}
              <Row>
                <Col xs={24} lg={12}>
                  <h4 className="itemTitle"> {data.title} </h4>
                </Col>
                <Col style={{ textAlign: "right" }} xs={24} lg={12}>
                  <Row xs={24} sm={12}>
                    {data.green && (
                      <Col>
                        <Avatar
                          size={{ xs: 20, sm: 12 }}
                          style={{
                            backgroundColor: "#2ECC71",
                          }}
                        >
                          <img alt="greenLabel" src={data.green} />
                        </Avatar>
                      </Col>
                    )}
                    {data.red && (
                      <Col>
                        <Avatar
                          size={{ xs: 20, sm: 12 }}
                          style={{
                            backgroundColor: "#F8593B",
                          }}
                        >
                          <img alt="redLabel" src={data.red} />
                        </Avatar>
                      </Col>
                    )}
                    {data.yellow && (
                      <Col>
                        <Avatar
                          size={{ xs: 20, sm: 12 }}
                          style={{
                            backgroundColor: "#FFC22B",
                          }}
                        >
                          <img alt="yellowLabel" src={data.yellow} />
                        </Avatar>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={24} className="itemDescription">
                  {data.description}
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
                  <div>{data.calory} Cal</div>
                </Col>
                <Col md={24} lg={8} xl={12}>
                  <div>P/F/C: {data.pfc}</div>
                </Col>
                <Col md={24} lg={8} xl={6}>
                  <div>{data.celcius} °C</div>
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
                  <div className="new-prize">${data.newPrize}</div>
                </Col>
                <Col xs={12} lg={6}>
                  <div className="old-prize">${data.oldPrize}</div>
                </Col>
                <Col xs={24} lg={12}>
                  <button className="order-button">Order</button>
                </Col>
              </Row>
            {/* </Card> */}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default App;
