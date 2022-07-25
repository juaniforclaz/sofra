import { Container, Row } from "react-bootstrap"
import { Item } from "../../components/item"
import Layout from "../../components/layout"
import { getItems } from "../../services/itemService"

export default function Index({ items }) {

    return (

        <Layout title='Catalogo'>

            <Container>

                <Row>

                    {
                        items && items.map((item) => <Item key={item.id} item={item} showAs='Default' />)
                    }

                </Row>

            </Container>

        </Layout>

    )
    
}

export async function getStaticProps() {

    const res = await getItems();

    return {
        props: {
            items: res,
        }
    }

}
