import Layout from "../../components/layout";
import { Item } from "../../components/item"
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ItemPage({ productInfo }) {
    return (

        <Layout>

            <Item item={productInfo.data} showAs='Page' />

        </Layout>

    )
}

export async function getStaticPaths() {

    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const id = params.id
    const product = await getItemData(id)

    return {
        props: {
            productInfo: product,
        }
    }
}
