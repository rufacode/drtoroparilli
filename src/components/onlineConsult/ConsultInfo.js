// import {useState, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {MHidden} from "../@material-extend";
import OnlineConsultOnline from "./OnlineConsultModal";

export default function ConsultInfo() {
  // const [state, setState] = useState(false);

  // useEffect(() => {
  //   // Effect code here
  //   return () => {
  //     //your cleanup code codes here
  //   };
  // }, [state])

  return (
    <Box sx={{p: 3, height: {md: '100%'}, backgroundColor: '#307cceab', color: '#fff'}}>
      <Typography variant='h1' color='#fff' align='center' fontWeight='bold'>Consulta <br/> online</Typography>
      <MHidden width='mdDown'>
        <Typography fontWeight='600' sx={{mt: 2}} variant='body1'>
          Llenar este formulario, y responder sus preguntas, permitirá al Dr. Toro Parilli realizar una evaluación
          inicial de su caso, para que reciba un diagnóstico y el correspondiente presupuesto.
        </Typography>
        <Typography fontWeight='600' sx={{mt: 2}} variant='body1'>
          En pro de realizar un diagnóstico preciso es importante que suministre toda la información solicitada
          con la mayor fidelidad posible.
        </Typography>
        <Typography sx={{mt: 2}} fontWeight='600' variant='body1'>
          Tiempo aproximado para llenar la consulta online: 10 minutos.
        </Typography>
        <Typography sx={{mt: 2}} fontWeight='600' variant='body1'>
          • General: US $ 50,00
        </Typography>
        <Typography sx={{mt: 2}} fontWeight='600' variant='body1'>
          • Solo para residentes en Venezuela: Bs. 242,00
        </Typography>
        <Typography sx={{mt: 2}} fontWeight='600' variant='body1'>
          Si requiere ayuda en el proceso, por favor escriba a: <span>atencionalcliente@toroparilli.com </span>
        </Typography>
        <Typography sx={{mt: 2}} variant='body1' fontWeight='600'>
          Nota: La información e imágenes suministradas son estrictamente confidenciales.
        </Typography>
      </MHidden>
      <Box
        sx={{
          display: 'flex',
          justifyContent: {xs: 'center', md: 'end'},
          mt: {md: 5, xs: 2}
        }}>
        <OnlineConsultOnline/>
      </Box>
    </Box>
  )
}
 
