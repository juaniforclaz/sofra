import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Categorias from '../components/categorias'
import Layout from '../components/layout'

export default function Home() {

  return (

    <Layout title="Inicio">

      <div className='container-fluid bg-white py-3 shadow-sm mb-3'>
        
        <Row>

          <Col>

            <Image
              src={'/Untitled design.png'}
              width={1920}
              height={1080}
              alt="Banner"
            />

          </Col>

        </Row>

      </div>

      <div className='container-fluid bg-white py-3 shadow-sm'>


        <Categorias />

      </div>

    </Layout>
  )

}
