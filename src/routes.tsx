import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { useAuth } from './contexts/auth';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';

export default function MyRoutes() {

  const auth = useAuth();

  return (

    <Router>
      <ThemeProvider theme={theme}>
        <Routes>

          <Route path='/:username' element={<Profile />} />
          {auth.authData?.uid ?
            <>
              <Route path='/dashboard' element={<DashBoard name='Dashboard' />} />
              <Route path='/' element={<Navigate to='/dashboard' />} />
            </>
            :
            <>
              <Route path='/' element={<Login name='Login' />} />
              <Route path='/register' element={<Register name='Register' />} />
            </>
          }

        </Routes>
      </ThemeProvider>
    </Router>
  )
}