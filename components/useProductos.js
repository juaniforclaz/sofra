import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"

export const useProductos = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, "productos")

        getDocs(productosRef)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(newItems)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return {

        items, loading

    }

}