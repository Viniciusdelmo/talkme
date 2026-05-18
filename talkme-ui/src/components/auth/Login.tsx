import { Link } from 'react-router-dom'
import {Link as MUIlink } from '@mui/material'
import Auth from './Auth'

const Login = () => {
  return (
    <>
        <Auth submitLabel='Login' onSubmit={async() => {}}>
            <Link to={'/signup'} style={{ alignSelf: "center"}}>
            <MUIlink >
                Signup Page
            </MUIlink>
            </Link>
        </Auth>
    </>
    
  )
}

export default Login