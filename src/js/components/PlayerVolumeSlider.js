import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#EA18FF' : '#EA18FF',
    
    height: 50,
    width: 15,
    borderRadius: "none" ,
    padding: '10px 0',
    '& .MuiSlider-thumb': {
      borderRadius: '5px 5px 5px 5px',
      
      
      height: 5,
      width: 25,
      backgroundColor: '#fff',
      
      
      '&:focus, &:hover, &.Mui-active': {
        
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
            
          
        },
      },
    },
    '& .MuiSlider-valueLabel': {
      
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
        
        display: 'none',
      },
      '& *': {
        
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      borderRadius: "0 0 5px 5px",
      
    },
    '& .MuiSlider-rail': {
      opacity: 5,
      backgroundColor: '#FFFFFF',
      
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
       
      },
    },
  }));

const PlayerVolumeSlider = (value1) => {

    const [value, setValue] = React.useState(1);
    value1 = value 
    const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
    return (

        
        <div>
            <Box sx={{ height: 400 , position:"absolute"}} >
        <IOSSlider
        className='player_volume'
        sx={{
          
          '& input[type="range"]': { 
            width: 800 ,
            WebkitAppearance: 'slider-vertical',
           
            
          },
          
        }}
        orientation="vertical"
        defaultValue={100}
        step={1}
        value={value}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        color="secondary"
        onChange={handleSliderChange}
        
      />
      </Box>
        </div>
    )
}




export default PlayerVolumeSlider;