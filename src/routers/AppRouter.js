import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/PageHome'
import ContactPage  from '../pages/ContactPage';
import ProjectPage from '../pages/ProjectPage'
import ProjectDetails from '../pages/ProjectDetails';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />
            <Route path='/contact' element={<ContactPage />} />           
        </Routes>
    )
}

export default AppRouter;
