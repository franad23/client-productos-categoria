import { useEffect, useState } from "react";
import ModalCreateProduct from "../components/modalCreateProduct";
import { axiosClient } from "../helpers/axiosClient";

function AdminPage() {
    const [ loading, setLoading ] = useState(true);
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get('/products');
            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>
            <ModalCreateProduct
                getProducts={getAllProducts}
            />
            {
                loading ? <span>Cargando Productos...</span> : (
                    <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoria</th>
                        <th>Creado por</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.category.name}</td>
                                <td>{product.createdBy.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                )
            }
        </>
    )
}

export default AdminPage;