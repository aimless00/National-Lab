import { useContext } from "react"
import { Authcontext } from "./AuthProvider"

const useAuth = () => {
    return useContext(Authcontext)
}

export default useAuth;