import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Footer from "../Footer/Footer"

export const HideFooter = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== "/bookingConfirmed") {
            <Footer/>
        }
    },[location.pathname])

    return null
}