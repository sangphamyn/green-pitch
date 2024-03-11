import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes/index'
import Header from './components/HeaderComponent/HeaderComponent';

const App = () => {
    return (
        <Router>
            <Routes>
            {routes.map((route) => {
                const Page = route.page
                const Layout = route.isShowHeader ? Header : Fragment
                return (
                <Route key={route.path} path={route.path} element={
                    <div>
                        <Header/>
                        <Page />
                    </div>
                } />
                )
            })}
            </Routes>
        </Router>
    );
};

export default App;