import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoutes() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        function checkAuth () {
            const currentUser = JSON.parse(localStorage.getItem('auth'));
            if (!currentUser || !currentUser?.auth) {
                navigate('/login');
                setLoading(false);
                return
            }
            setLoading(false);
        }
        checkAuth();
    }, []);
    
    return (loading ? <span>Cargando...</span> : <Outlet/>)
}

export default ProtectedRoutes;