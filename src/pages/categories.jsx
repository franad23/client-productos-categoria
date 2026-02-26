import { useEffect, useState } from "react";
import { axiosClient } from "../helpers/axiosClient";

function CategoriesPage() {

    const [ categories, setCategories ] = useState([]);

    async function handleCreateCategory (e){
        try {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            await axiosClient.post('/categories', data);
            getCategories();
            form.reset();
        } catch (error) {
            
        }
    }

    async function getCategories () {
        try {
            const response = await axiosClient.get('/categories');
            setCategories(response.data.data);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    console.log(categories)
    return (
        <>
            <form onSubmit={(e) => handleCreateCategory(e)}>
                <label>Nombre Categoria:</label>
                <input type="text" name="name"/>
                <button>Crear</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !categories.length ? 
                        <td>No hay categorias aun</td> : 
                        categories.map((category) => (
                            <tr key={category._id}>
                                <td>{category._id}</td>
                                <td>{category.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
};

export default CategoriesPage;