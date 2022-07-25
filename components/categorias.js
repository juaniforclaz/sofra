import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function Categorias() {

    return (

        <>

            <Container>

                <Row>

                    <h3 className='mb-3 mt-3 text-center'>Categorias</h3>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/ff575299-2fa6-439a-9a26-dfe627e4e8791-92496d92f312f73ec816248279211780-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3'>Carteras</h5>

                    </Col>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/4c0fb145-04b0-44f0-b022-91a1995c94bd1-1e19426c21396146af16268867881987-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home shadow-sm'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3 shadow-sm'>Bolsos</h5>

                    </Col>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/ca81ea17-581f-41f4-a0c2-56c2a822f9031-f63bc9d570bbccf03616265583848113-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3'>Mochilas</h5>

                    </Col>

                </Row>

                <Row>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/94f8c279-8c6b-4837-ac5f-aeed1fe035841-74412f9b1b2ce5809a16291441299784-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3'>Odontologia</h5>

                    </Col>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/afb35bdb-99fb-41ef-a41b-eef22ba11712-6bd1bfb43da0fae42616359975317428-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3'>Riñoneras</h5>

                    </Col>

                    <Col sm={4} className='d-flex flex-column'>

                        <Image
                            src={'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/3aa32692-cb59-4bf1-8047-1d91c45ae67c1-1b6d5dd19e740c974616259461856349-480-0.jpeg'}
                            width={1920}
                            height={1080}
                            alt="Banner"
                            className='mb-0 img-home'
                        />

                        <h5 className='text-white text-center bg-dark p-3 mb-3'>Billeteras</h5>

                    </Col>

                </Row>
            </Container>

        </>
    )
}