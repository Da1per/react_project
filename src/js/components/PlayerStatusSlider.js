import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';


const StatusSlider = styled(Slider)(({  theme  }) => ({
    color: theme.palette.mode === 'dark' ? '#ff9505' : '#ff9505',
    height: 10,
    width: 280,
    borderRadius: "none" ,
    padding: '10px 0',
    '& .MuiSlider-thumb': {
      borderRadius: '5px 5px 5px 5px',
      height: 13,
      width: 20,
      backgroundColor: '#fff',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        '@media (hover: none)': {
        },
      },
    },
    '& .MuiSlider-valueLabel': {
        
        
      
    },
    '& .MuiSlider-track': {
      border: 'none',
      borderRadius: "5px 5px 5px 5px",
      
    },
    '& .MuiSlider-rail': {
      opacity: 3,
      backgroundColor: '#bfbfbf',
      
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
  
  export default function PlayerStatusSlider(props) {
    const statusVal = props.val
    const statusMaxi = props.maxi
    const statusFun = props.fun
    const handleSliderChange = (event, newValue) => {
        statusFun(newValue)
      };
      console.log(statusVal)
    return (
        
      <Box sx={{ width: 300 }}>
        <StatusSlider
          min="0"
          step='0.01'
          max={statusMaxi}
          

          value={statusVal}
          className="player_status_timeline"
          onChange={handleSliderChange}
          
          
          
          color="secondary"
        />
      </Box>
    );
  }




  