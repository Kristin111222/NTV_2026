import IconButton from '@mui/material/IconButton'

import LoginIcon from '@mui/icons-material/Login'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

function NavbarButtons() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      
      <IconButton color="primary" aria-label="login">
        <LoginIcon />
      </IconButton>

      <IconButton color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>

      <IconButton color="primary" aria-label="cart">
        <ShoppingCartIcon />
      </IconButton>

      <IconButton color="primary" aria-label="add to cart">
        <AddShoppingCartIcon />
      </IconButton>

    </div>
  )
}

export default NavbarButtons