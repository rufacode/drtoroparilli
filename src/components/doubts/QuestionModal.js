import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton, MenuItem, Select,
  TextField,
  Typography
} from "@mui/material";
import { useState } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ReactPlayer from "react-player";

export default function QuestionModal() {
  const [openPreview, setOpenPreview] = useState(false);



  function handleClose() {
    setOpenPreview(false);
  }

  async function showDetail() {
    setOpenPreview(true)
  }

  return (
    <>
      <Button
        fullWidth
        variant='contained'
        color='primary'
        sx={{ fontSize: '.85rem', my: 2 }}
        onClick={() => showDetail()}
      >
        ¿No aclaramos tus dudas? Consúltanos</Button>
      <Dialog onClose={handleClose} open={openPreview} fullWidth maxWidth="sm">
        <Box sx={{ display : 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4 }}>
          <Typography sx={{ textAlign: 'center' }}>¿NO ACLARAMOS TUS DUDAS? CONSÚLTANOS</Typography>
          <IconButton onClick={handleClose} sx={{ p: 1.5}} color='secondary'>
            <DisabledByDefaultIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>Nombre</Typography>
              <TextField
                fullWidth
                type='text'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Apellido</Typography>
              <TextField
                fullWidth
                type='text'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Email</Typography>
              <TextField
                fullWidth
                type='text'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Procedimientos</Typography>
              <FormControl variant="outlined" sx={{ mb: 2 }} fullWidth>
                <Select
                  labelId="Procedures"
                  id="Procedures"
                >
                  <MenuItem value=''>Seleccione una opcion</MenuItem>
                  <MenuItem value='Gluteoplastia'>Gluteoplastia</MenuItem>
                  <MenuItem value='Cirugia del abdomen'>Cirugia del abdomen</MenuItem>
                  <MenuItem value='Liposuccion laser'>Liposuccion laser</MenuItem>
                  <MenuItem value='Tratamiento de arrugas'>Tratamiento de arrugas</MenuItem>
                  <MenuItem value='Cirugia del menton'>Cirugia del menton</MenuItem>
                  <MenuItem value='Cirugia del menton'>Cirugia del menton</MenuItem>
                  <MenuItem value='Cirugia de parpados'>Cirugia de parpados</MenuItem>
                  <MenuItem value='Cirugia de orejas'>Cirugia de orejas</MenuItem>
                  <MenuItem value='Reduccion de mamas'>Reduccion de mamasn</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography>Mensaje</Typography>
              <TextField
                fullWidth
                type='text'
                multiline
                rows={6}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <Button variant='contained'>Enviar</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

