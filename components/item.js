import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";

export const Item = ({ item, showAs }) => {

    if (showAs === 'Page') {

        return (

            <div className="container-fluid bg-white shadow-sm py-3">

                <Container>

                    <Row className="border-bottom mb-3 mx-auto">

                        <h2 >{item.title}</h2>

                    </Row>

                    <Row className="mx-auto text-center">

                        <Col lg={6} className='border-bottom'>

                            <Image
                                src={item.img}
                                className="img-item mb-3 shadow-sm"
                                alt={item.title}
                                width={400}
                                height={400}
                            />

                        </Col>

                        <Col className="text-start mt-3">

                            <h5>$ {item.price}</h5>
                            <h5>{item.desc}</h5>

                        </Col>

                    </Row>

                </Container>

            </div>

        )


    }

    if (showAs === 'List Item') {

        return <div>

            <Col>

                <Card className="mx-auto mb-5 card-item shadow-sm border-0">

                    <Card.Body>

                        <Link href={`/catalogo/${item.id}`} className='nav-link'>

                            <Image
                                src={item.img}
                                className="mb-3 img-item"
                                alt={item.title}
                                width={550}
                                height={600}
                            />

                        </Link>

                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>${item.price}</Card.Text>
                        <Button variant="success">Add to cart</Button>

                    </Card.Body>

                </Card >

            </Col>

        </div>

    }

    return (

        <Col>

            <Card className="mx-auto mb-5 card-item shadow-sm border-0">

                <Card.Body>

                    <Link href={`catalogo/${convertToPath(item.title)}`}>

                        <Image
                            src={item.img}
                            className="mb-3 img-item"
                            alt={item.title}
                            width={550}
                            height={600}
                        />

                    </Link>

                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <button className="btn btn-outline-dark">Add to cart</button>

                </Card.Body>

            </Card >

        </Col>

    )

}