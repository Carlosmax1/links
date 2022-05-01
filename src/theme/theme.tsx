import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    primary:{
      main: "#38035c",
      contrastText: "#bdbdbd"
    },
    secondary:{
      main: "#55048B",
      contrastText: "#bdbdbd",
    },
  },

  typography:{
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeightRegular: 400
  },

  components:{
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color: "#bdbdbd",
        },
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          color:"#bdbdbd",
        },
        input:{
          borderColor: "#bdbdbd",
        },
        notchedOutline:{
          borderColor:"#bdbdbd",
        },
      }
    }
  },
});

export const hoverInput = {
  '& .MuiOutlinedInput-root':{
    fontSize: 19,
    ':hover':{
      '& .MuiOutlinedInput-notchedOutline':{
        borderColor: "#55048B",
      }
    }
  },
  '& .MuiInputLabel-root':{
    fontSize: 18,
  },
  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':{
    borderColor: "#717173",
  },
  '& .MuiInputLabel-root.Mui-disabled':{
    color: '#717173'
  },
  margin: 2
};

export const buttonStyle = {
  fontWeight: 400,
};