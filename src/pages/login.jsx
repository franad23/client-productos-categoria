import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosClient } from "../helpers/axiosClient";

function LoginPage() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmitLogin = async (e) => {
        try {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const response = await axiosClient.post('/user/login', data);
            localStorage.setItem('auth', JSON.stringify({
                auth: true,
                token: response.data.data,
            }));
            navigate('/admin');
        } catch (error) {
           setError(error.message) 
        }
    }
    return (
        <form onSubmit={(e) => handleSubmitLogin(e)}>
            <span>{error}</span>
            <label>Email:</label>
            <input type="email" placeholder="email@email.com" name="email"/>
            <label>Contraseña:</label>
            <input type="password" name="password"/>
            <button>Iniciar Sesion</button>
        </form>
    )
}

export default LoginPage;