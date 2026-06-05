import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'

import LoginIcon from '@mui/icons-material/Login'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import HomeIcon from '@mui/icons-material/Home'

function NavbarButtons() {
   const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      
       <IconButton
  color="primary"
  aria-label="home"
  onClick={() => navigate('/')}
>
  <HomeIcon />
</IconButton>

<IconButton
  color="primary"
  aria-label="login"
  onClick={() => navigate('/login')}
>

        <LoginIcon />
      </IconButton>

      <IconButton color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>

      <IconButton color="primary" aria-label="cart"
      onClick={() => navigate('/CartPage')}
      >
        <ShoppingCartIcon />
      </IconButton>


     

    </div>
  )
}

export default NavbarButtons