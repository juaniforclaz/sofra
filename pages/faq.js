import Link from "next/link"
import Layout from "../components/layout"

export default function Faq() {
    return (

        <Layout title='Faq'>

            <div className='container-fluid bg-white py-3 shadow-sm'>

                <div className="container">

                    <h1>Faq</h1>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Compra</li>
                        <li class="list-group-item">Tiempo de entrega</li>
                        <li class="list-group-item">Pagos</li>
                        <li class="list-group-item">Reclamos/devoluciones</li>
                        <li class="list-group-item">Retiro</li>
                    </ul>

                </div>

            </div>

        </Layout>

    )
}