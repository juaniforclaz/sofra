import { Row } from "react-bootstrap"
import { Item } from "./item"

export const ItemList = ({ items }) => {

    return (

        <Row className="mx-auto py-3">

            {
                items.map((item) => < Item key={item.id} item={item} showAs='Default'/>)
            }

        </Row>

    )

}