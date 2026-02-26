import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoutes() {
    const navigate = useNavigate();
    useEffect(() => {
        function checkAuth () {
            const currentUser = JSON.parse(localStorage.getItem('auth'));
            if (!currentUser || !currentUser?.auth) {
                navigate('/login');
                return
            }
        }
        checkAuth();
    }, []);
    
    return <Outlet/>
}

export default ProtectedRoutes;