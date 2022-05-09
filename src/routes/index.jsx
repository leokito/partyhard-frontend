import { Routes, Route } from "react-router-dom"
import CreateRoom from "../pages/CreateRoom"
import Home from "../pages/Home"
import JoinRoom from "../pages/JoinRoom"

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/join_room" element={<JoinRoom />}/>
            <Route path="/create_room" element={<CreateRoom/>} />
        </Routes>
    )
}

export default AppRoutes