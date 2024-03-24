import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PitchCreatePage from "../pages/PitchCreatePage/PitchCreatePage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowHeader: true
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeader: true
    },
    {
        path: '/pitch/create',
        page: PitchCreatePage,
        isShowHeader: true
    },
]