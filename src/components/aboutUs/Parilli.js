import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {useEffect} from "react";
import {useDispatch} from "../../redux/store";
import {Box, Grid, Typography} from "@mui/material";


export default function Parilli() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/parilli-about.jpg'));
  }, [])
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h4'>
        DR. GERARDO TORO PARILLI
      </Typography>
      <Typography variant='h6' sx={{ mb: 3 }}>
        Cirujano plástico
      </Typography>
      <Box sx={{ overflowY: 'auto', maxHeight: '305px' }}>
        <Typography sx={{ mt: 2 }}>
          Es egresado de la Universidad de Carabobo, donde obtuvo el título de Médico Cirujano. Posteriormente
          ingresó en la Universidad Central de Venezuela, donde realizó su primer postgrado como Cirujano General
          en el Hospital Universitario de Caracas. Allí realizó trabajos de investigación científica y posteriormente
          cumplió sus pasantías entre España, Argentina y Brasil.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Su segundo postgrado lo realizó en el Hospital Militar Dr. Carlos Arvelo, donde obtuvo el título de
          Especialista en Cirugía Plástica, Reconstructiva y Maxilofacial. Durante este periodo, recibió formación
          en manejo de quemaduras, cirugía reconstructiva posterior al traumatismo facial, patologías oncológicas y
          congénitas; así como también en patología maxilofacial. Vale destacar que gracias a sus trabajos científicos
          publicados, fue laureado con distintos premios a  nivel nacional e internacional.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Actualmente, el Dr. Gerardo Toro Parilli es miembro postulante de la Sociedad Venezolana de Cirugía Plástica,
          Reconstructiva, Estética y Maxilofacial (SVCPREM), de la  Federación Ibero Latinoamericana de Cirugía
          Plástica y Reconstructiva (FILACP); y además, ha participado en el staff de cirujanos plásticos de la
          Organización Miss Venezuela y como jurado y asesor de otros concursos de belleza. Desde sus inicios en la
          cirugía plástica, ha acumulado más de 500 pacientes atendidos con éxito a la fecha, ofreciendo una gama de
          más de 30 procedimientos para hombres y mujeres.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3, }}>
          <Grid irem xs={12} md={6}>
            <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight='bold' variant='caption'>SOCIEDAD VENEZOLANA DE CIRUGÍA PLÁSTICA</Typography>
              <img src="/static/img/asociacion-cirugia-plastica.png" alt=""/>
            </Box>
          </Grid>
          <Grid irem xs={12} md={6}>
            <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight='bold' variant='caption'>FEDERACIÓN IBERO LATINOAMERICANA DE CIRUGÍA PLÁSTICA</Typography>
              <img src="/static/img/federacion-ibero.png" alt=""/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
