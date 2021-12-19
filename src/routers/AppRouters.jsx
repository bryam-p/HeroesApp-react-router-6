
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../components/login/Login'
import DashboardRoutes from './DashboardRoutes'

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters
