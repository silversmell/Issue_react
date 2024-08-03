// App.js
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'; // Menu 컴포넌트 import
import Home from './components/Home'; // Home.js
import { GlobalProvider } from './components/GlobalContext';
import {getIP, getCopyright} from './components/Tool';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeLogout from './components/EmployeeLogout';
// import Issue_Find_all from './issue/Find_all'; // ./issue/Find_all.js
import Issue_Create from './issue/Create'; // ./issue/Create.js
import Issue_Read from './issue/Read'; // ./issue/Read.js
import Issue_Update from './issue/Update'; // ./issue/Update.js
import Issue_Delete from './issue/Delete'; // ./issue/Delete.js
import Info from './components/Info'; // ./components/Info.js

// 페이징, ./issue/Find_all_paging.js
import Issue_Find_all from './issue/Find_all_paging'; 

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Menu /> {/* Menu 컴포넌트 사용 */}
          <hr />
          <Routes>
            <Route path="/" element={<Home />} /> {/* <Link to="/"> */}
            <Route path="/employee/login" element={<EmployeeLogin />} /> {/* <Link to="/employee/login"> */}
            <Route path="/employee/logout" element={<EmployeeLogout />} /> {/* <Link to="/employee/logout"> */}
            <Route path="/issue/find_all" element={<Issue_Find_all />} /> {/* <Link to="/issue/find_all"> */}
            <Route path="/issue/create" element={<Issue_Create />} /> {/* <Link to="/issue/create"> */}
            <Route path="/issue/:issueno" element={<Issue_Read />} /> {/* <Link to="/issue/1"> */}
            <Route path="/issue/update/:issueno" element={<Issue_Update />} /> {/* <Link to="/issue/update/1"> */}
            <Route path="/issue/delete/:issueno" element={<Issue_Delete />} /> {/* <Link to="/issue/delete/1"> */}
            <Route path="/info" element={<Info />} /> {/* <Link to="/info"> */}
          </Routes>
          <hr />
          <div style={{textAlign: 'center', margin: '20px 0px'}}>{getCopyright()}</div>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;

/*
cd issue_v1react
npm start
*/

