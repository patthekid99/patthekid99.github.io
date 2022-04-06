import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/PageHome'
import ContactPage  from '../pages/ContactPage';
import ProjectPage from '../pages/ProjectPage'
import ProjectDetails from '../pages/ProjectDetails';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/Projects' element={<ProjectPage />} />
            <Route path='/Projects/:id' element={<ProjectDetails />} />
            <Route path='/Contact' element={<ContactPage />} />           
        </Routes>
    )
}

export default AppRouter;
