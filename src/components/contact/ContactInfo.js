import {useState, useEffect} from 'react';
import Venezuela from "./Venezuela";
import Dominicana from "./Dominicana";
import {Box, Button, ButtonGroup, Paper} from "@mui/material";
import {styled} from "@mui/styles";

//-----------------------------------------------------------

const ButtonWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))

//-----------------------------------------------------------

export default function ContactInfo() {
  const [view, setView] = useState('venezuela');
  const [component, setComponent] = useState(undefined);



  useEffect(() => {
    switch (view) {
      case "venezuela":
        setComponent(<Venezuela />)
        break;
      case "dominicana":
        setComponent(<Dominicana />)
        break;
      default:
        break;
    }
  }, [view]);

  return (
    <Paper elevation={3} sx={{ p: 3, minHeight: '30rem' }}>
      <ButtonWrapper >
        <Button variant={view === 'venezuela' && 'contained'} onClick={() => setView('venezuela')}>Venezuela</Button>
        <Button variant={view === 'dominicana' && 'contained'} onClick={() => setView('dominicana')}>Republica Dominicana</Button>
      </ButtonWrapper>
      {component}
    </Paper>
  )
}
 
