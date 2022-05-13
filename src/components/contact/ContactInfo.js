import {useState, useEffect} from 'react';
import Venezuela from "./Venezuela";
import Dominicana from "./Dominicana";
import {Box, Button, ButtonGroup, Paper} from "@mui/material";
import {styled} from "@mui/styles";
import {useSelector} from "../../redux/store";

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

  const {isLoading, sections} = useSelector(state => state.language)


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
        {
          sections.contact.options.locations.places.map((place) => (
            <Button key={place.id} sx={{ fontSize: '.85rem' }} variant={view === place.value && 'contained'} onClick={() => setView(place.value)}>{place.title}</Button>
          ))
        }</ButtonWrapper>
      {component}
    </Paper>
  )
}
 
