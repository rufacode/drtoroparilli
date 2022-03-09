import {useState, useEffect} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {MHidden} from "../@material-extend";

export default function ConsultInfo() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect code here
    return () => {
      //your cleanup code codes here
    };
  }, [state])

  return (
    <Box sx={{ p: 3, height: {md: '100vh'}, backgroundColor: '#307cceab', color: '#fff', position: 'relative' }}>
      <Typography variant='h1' color='#fff' align='center'>Consulta <br/> online</Typography>
      <MHidden width='mdDown'>
        <Typography sx={{ mt: 2 }} variant='body1'>
          Llenar este formulario, y responder sus preguntas, permitirá al Dr. Toro Parilli realizar una evaluación
          inicial de su caso, para que reciba un diagnóstico y el correspondiente presupuesto.
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          En pro de realizar un diagnóstico preciso es importante que suministre toda la información solicitada
          con la mayor fidelidad posible.
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          Tiempo aproximado para llenar la consulta online: 10 minutos.
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          • General: US $ 50,00
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          • Solo para residentes en Venezuela: Bs. 242,00
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          Si requiere ayuda en el proceso, por favor escriba a: <span>atencionalcliente@toroparilli.com </span>
        </Typography>
        <Typography sx={{ mt: 2 }} variant='body1'>
          Nota: La información e imágenes suministradas son estrictamente confidenciales.
        </Typography>
      </MHidden>
      <Box
      sx={{
        display: {xs: 'flex', md: 'auto'},
        justifyContent: 'center',
        mt: {xs: 2, md: 0}
      }}>
        <Button
          variant='contained'
          size='small'
          sx={{
            position: {md: 'absolute'},
            bottom: {md:'2rem'},
            right: {md:'2rem'}
          }}
        >
          Reportar error
        </Button>
      </Box>
    </Box>
  )
}
 
