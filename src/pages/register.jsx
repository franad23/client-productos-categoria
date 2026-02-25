function RegisterPage() {
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <form onSubmit={(e) => handleSubmitLogin(e)}>
            <label>Nombre:</label>
            <input type="text" placeholder="Pepe" name="name"/>
            <label>Apellido:</label>
            <input type="text" placeholder="Perez" name="lastaname"/>
            <label>Email:</label>
            <input type="email" placeholder="email@email.com" name="email"/>
            <label>Contraseña:</label>
            <input type="password" name="password"/>
            <label>Repetir Contraseña:</label>
            <input type="password" name="passwordRepeat"/>
            <button>Iniciar Sesion</button>
        </form>
    )
}

export default RegisterPage;