import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../store/auth-ctx"

function DashboardPage() {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext)
    useEffect(() => {
        if (!authCtx.loggedIn) {
            navigate("/")
        }
    }, [authCtx.loggedIn, navigate])

    return (
        <Dashboard />
    )
}

export default DashboardPage