import { useState } from "react";
import { axiosClient } from "../helpers/axiosClient";

function RegisterPage() {
    const [error, setError] = useState('');
    const handleSubmitLogin = async (e) => {
        try {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            if (data.password !== data.passwordRepeat) {
                setError('Contraseñas no coinciden');
                return;
            }
            const response = await axiosClient.post('/user/register', data);
            console.log(response);
        } catch (error) {
           setError(error.message);
        }
    }
    return (
        <form onSubmit={(e) => handleSubmitLogin(e)}>
            <span>{error}</span>
            <label>Nombre:</label>
            <input type="text" placeholder="Pepe" name="name"/>
            <label>Apellido:</label>
            <input type="text" placeholder="Perez" name="lastname"/>
            <label>Email:</label>
            <input type="email" placeholder="email@email.com" name="email"/>
            <label>Contraseña:</label>
            <input type="password" name="password"/>
            <label>Repetir Contraseña:</label>
            <input type="password" name="passwordRepeat"/>
            <button>Registrarme</button>
        </form>
    )
}

export default RegisterPage;