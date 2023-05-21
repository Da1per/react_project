import '../../css/AuthMod.sass';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const AuthMod =({active,but})=> {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (active)?(
    <div className="pop_up" onClick={but}>
      <div className='pop_up_body' onClick={e=>e.stopPropagation()}>
        <form className='pop_up_form'>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{justifyContent:'space-around',
                    display:'flex',
                    flexDirection:'column',
                    alignContent:'center',
                    backgroundColor:'#ffffff',
                    width:'100%',
                    height:'60%',
                    borderRadius:'5%',
                    padding:'2% 4% 2% 4%'}}> 
            <FormControl variant="filled">
              <InputLabel htmlFor="input-with-icon-textfield" 
                style={{
                      color:'#262626',
                      fontSize:'25px'}} >Login</InputLabel>
              <FilledInput
                required
                color="success"
                id="input-with-icon-textfield"
                style={{backgroundColor:'#ffffffc5' ,
                        fontSize:'20px',
                        padding:'6% 4% 2% 4%',
                        width:'90%'}}/>
            </FormControl>  
            <FormControl variant="filled">
              <InputLabel htmlFor="filled-adornment-password" 
                  style={{
                          color:'#262626',
                          fontSize:'25px'}} >Password</InputLabel>
                <FilledInput
                  color="success"
                  id="filled-adornment-password"
                  variant="filled"
                  style={{backgroundColor:'#ffffffc5' ,
                          fontSize:'20px',
                          padding:'6% 4% 2% 4%',
                          width:'90%'}} 
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                  </InputAdornment>}/>
            </FormControl>
            <Button variant="contained" 
                    style={{backgroundColor:'#262626' ,
                            fontSize:'20px',
                            padding:'2% 6% 2% 6%',}} >Login
            </Button>
          </Box>
        </form>
      </div>
    </div>
  ):null}
export default AuthMod;
 