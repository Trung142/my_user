import UserTable from '../compement/userTable';
import { Routes, Route, } from "react-router-dom";
import Home from '../compement/home';
import Login from '../compement/LoiginUser';
import { Signup } from '../compement/signup';
import PriveRouter from './PriveRouter';
const AppRouter = () => {

    return (
        <>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user"
                    element={
                        <PriveRouter>
                            <UserTable />
                        </PriveRouter>}
                />
            </Routes>
        </>
    )

}
export default AppRouter;