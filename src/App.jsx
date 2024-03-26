import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/index";
import Header from "./components/HeaderComponent/HeaderComponent";
import ManagerSidebarComponent from "./components/ManagerSidebarComponent/ManagerSidebarComponent";
import ManagerHeaderComponent from "./components/ManagerSidebarComponent/ManagerHeader";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const MainHeader = route.isShowHeader ? Header : Fragment;
          const ManagerSidebar = route.isShowManagerSidebar
            ? ManagerSidebarComponent
            : Fragment;
          const ManagerHeader = route.isShowManagerSidebar
            ? ManagerHeaderComponent
            : Fragment;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <div>
                  <MainHeader />
                  <div className="flex">
                    <ManagerSidebar />
                    <div className="w-full">
                      <ManagerHeader />
                      <Page />
                    </div>
                  </div>
                </div>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
