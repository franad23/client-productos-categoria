function LoginPage() {
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <form onSubmit={(e) => handleSubmitLogin(e)}>
            <label>Email:</label>
            <input type="email" placeholder="email@email.com" name="email"/>
            <label>Contraseña:</label>
            <input type="password" name="password"/>
            <button>Iniciar Sesion</button>
        </form>
    )
}

export default LoginPage;