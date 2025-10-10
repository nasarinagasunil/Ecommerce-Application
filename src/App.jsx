import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home/home'
import { Cart } from './pages/Cart/cart'
import { Routes, Route } from 'react-router-dom'
import { WishList } from './pages/WishList/wishList'
import { AuthLogin } from './pages/AuthLogin/authLogin'
import { AuthSignup } from './pages/AuthSignup/authSignup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/auth/login' element={<AuthLogin />}></Route>
        <Route path='/auth/signup' element={<AuthSignup />} />
      </Routes>
    </>
  )
}

export default App
