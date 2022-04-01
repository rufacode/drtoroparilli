import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Slide from '@mui/material/Slide';

export default function OnlineConsultOnline() {
  const [openPreview, setOpenPreview] = useState(false);
  const [other, setOther] = useState(false);

  function handleClose() {
    setOpenPreview(false);
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  async function showDetail() {
    setOpenPreview(true)
  }

  return (
    <>
      <Button variant='contained' size='small' color='primary' onClick={() => showDetail()}>
        Reportar Error
      </Button>
      <Dialog onClose={handleClose} open={openPreview} fullScreen transitionComponent={Transition}>
        <Box sx={{textAlign: 'end'}}>
          <IconButton onClick={handleClose} sx={{p: 1.5}} color='secondary'>
            <DisabledByDefaultIcon/>
          </IconButton>
        </Box>
        <Box sx={{p: 5}}>
          <Typography variant='h6' fontWeight='bold' textAlign='center'>SI HAS TENIDO ALGÚN PROBLEMA CON NUESTRA CONSULTA ON LINE, TE
            AGRADECERÍAMOS QUE NOS AYUDES A RESOLVERLO LLENANDO ESTA FORMA.</Typography>
        </Box>
        <Divider sx={{my: 2}}/>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' fontWeight='600'>Nombre *</Typography>
              <TextField
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' fontWeight='600'>Correo *</Typography>
              <TextField
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' fontWeight='600'>Pais *</Typography>
              <TextField
                fullWidth
              />
              <Divider sx={{my: 2}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' fontWeight='600'>¿Desde qué equipo encontró problemas?*</Typography>
              <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                <Select
                  labelId="howDidYouKnow"
                  id="howDidYouKnow"
                >
                  <MenuItem value=''>Seleccione una opcion</MenuItem>
                  <MenuItem value={0}>Computadora</MenuItem>
                  <MenuItem value={1}>Tablet</MenuItem>
                  <MenuItem value={2}>Smartphone</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' fontWeight='600'>¿Cuál es el modelo/tipo de su equipo?*</Typography>
              <TextField
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' fontWeight='600'>¿Qué navegador utiliza?*</Typography>
              <TextField
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' fontWeight='600'>¿A qué dirección web de Toro Parilli está accediendo?</Typography>
              <TextField
                fullWidth
              />
              <Divider sx={{my: 2}}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' fontWeight='600'>¿En qué punto recibió un error del sistema?*</Typography>
              <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                <Select
                  labelId="howDidYouKnow"
                  id="howDidYouKnow"
                >
                  <MenuItem value=''>Seleccione una opcion</MenuItem>
                  <MenuItem value={0}>AL ingresar a la pagina, no la encuentra</MenuItem>
                  <MenuItem value={1}>Al tratar de acceder a la consulta online</MenuItem>
                  <MenuItem value={2}>Al ingresar con mi correo electronico</MenuItem>
                  <MenuItem value={3}>En un paso interno al estar llenando los datos</MenuItem>
                  <MenuItem value={4} onClick={() => setOther(true)}>Otro Por favor Describa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {
              other &&
              <Grid item xs={12}>
                <TextField
                  fullWidth
                />
              </Grid>
            }
            <Grid item xs={12}>
              <Typography variant='body1' fontWeight='600'>Si puede agregar una captura de pantalla de su problema, siempre puede ser de
                utilidad</Typography>
              <Box display='flex' alignItems='center'>
                <TextField
                  fullWidth
                />
                <Button variant='contained' size='large'>Seleccionar</Button>
              </Box>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' fontWeight='600'>Gracias por su reporte y utilice este espacio para describirnos el problema con la consulta on
                line*</Typography>
              <TextField
                multiline
                minRows={4}
                maxRows={6}
                fullWidth
              />
            </Grid>

          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}
