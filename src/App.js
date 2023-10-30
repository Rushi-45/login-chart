import React, { useState } from 'react'
import ComponentA from './components/ComponentA.js'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.js'
import AdminLogin from './components/AdminLogin.js'
import Adminpanel from './components/Adminpanel.js'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);
  const [users, setUsers] = useState([])

  console.log(users, 'isLoggedInUser')
  return (
    <div className=''>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        {!isLoggedInUser &&
          <Route path='/login' element={<Login setIsLoggedInUser={setIsLoggedInUser} setUsers={setUsers} users={users} />} />
        }
        {!isLoggedInAdmin &&
          <Route path='/admin-login' element={<AdminLogin setIsLoggedInAdmin={setIsLoggedInAdmin} />} />
        }
        <Route path='/dashboard' element={<ComponentA isLoggedInUser={isLoggedInUser} setIsLoggedInUser={setIsLoggedInUser}  />} />
        <Route path='/adminpanel' element={<Adminpanel isLoggedInAdmin={isLoggedInAdmin} setIsLoggedInAdmin={setIsLoggedInAdmin} users={users} />} />
      </Routes>
    </div>
  )
}

export default App

// import React from 'react'
// import ChartComponent from './components/ChartComponent'

// const App = () => {
//   return (
//     <div>
//       <ChartComponent />
//     </div>
//   )
// }

// export default App