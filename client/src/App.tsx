import { Home, Login, Signup, ErrorPage, Dashboard } from './pages/index'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Layout className='overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <ToastContainer />
    </Layout>
  )
}

export default App