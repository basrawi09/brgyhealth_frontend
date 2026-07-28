import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import API from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadUser();

    }, []);

    async function loadUser() {

        const token = localStorage.getItem("token");

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const response = await API.get("/auth/me", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setUser(response.data);

        }

        catch (error) {

            localStorage.removeItem("token");

            setUser(null);

        }

        finally {

            setLoading(false);

        }

    }

async function login(token) {

    localStorage.setItem("token", token);

    try {

        const response = await API.get("/auth/me");

        setUser(response.data);

    }

    catch {

        localStorage.removeItem("token");

        setUser(null);

    }

}

    function logout() {

        localStorage.removeItem("token");

        setUser(null);

    }

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}