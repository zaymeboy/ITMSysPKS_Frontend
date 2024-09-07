import React from 'react';
// import dependancy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// general page
import LoginPage from './page/LoginPage';
import Error404 from './page/Error404';

//specific page
import UserHomepage from './page/User/UserHomepage';
import StaffHomepage from './page/Staff/StaffHomepage';
import AdminHomepage from './page/Admin/AdminHomepage';

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/Admin' element={<AdminHomepage/>}/>
      <Route path='/User' element={<UserHomepage/>}/>
      <Route path='/Staff' element={<StaffHomepage/>}/>
    </Routes>
  );
}

export default App;