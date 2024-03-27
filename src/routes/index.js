import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PitchCreatePage from "../pages/PitchCreatePage/PitchCreatePage";
import PitchEditPage from "../pages/PitchCreatePage/PitchEditPage";
import ManagerLandingPage from "../pages/ManagerLandingPage/ManagerLandingPage";
import ManagerPage from "../components/ManagerSidebarComponent/ManagerSidebarComponent";
import GroupPitchPage from "../pages/GroupPitchPage/GroupPitchPage";
import PitchPricePage from "../pages/PitchPricePage/PitchPricePage";
import GroupPitchDetailPage from "../pages/GroupPitchDetailPage/GroupPitchDetailPage";
import SchedulePage from "../pages/SchedulePage/SchedulePage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/register",
    page: RegisterPage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
    isShowHeader: true,
  },
  {
    path: "/manager",
    page: ManagerLandingPage,
    isShowHeader: true,
  },
  {
    path: "/manager/index",
    page: ManagerLandingPage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/group-pitch",
    page: GroupPitchPage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/group-pitch/detail",
    page: GroupPitchDetailPage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/group-pitch/add",
    page: PitchCreatePage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/group-pitch/edit",
    page: PitchEditPage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/pitch-price",
    page: PitchPricePage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/schedule",
    page: SchedulePage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
  {
    path: "/manager/statistic",
    page: StatisticPage,
    isShowHeader: false,
    isShowManagerSidebar: true,
  },
];
