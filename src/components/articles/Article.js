import {Box, Button, Paper, Typography} from "@mui/material";

const CONTENT = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
   impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos 
  y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 
  años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
   igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales 
  contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo 
  Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`

const TITLE = `Titulo de ejemplo para articulo de ejemplo`;


export default function Article() {
  return (
    <Paper elevation={3} >
      <Box
        component='img'
        height={150}
        width='100%'
        sx={{ objectFit: 'cover' }}
        src="/static/dummy/dummy-producto.png"
        alt=""
      />
      <Box sx={{ p: 3 }}>
        <Typography variant='h5' sx={{ mb: 2 }} fontWeight='bold'>{TITLE}</Typography>
        <Typography variant='body1' >{CONTENT.substring(0, 200).concat('...')}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mt: 3 }}>Ver mas</Button>
        </Box>
      </Box>
    </Paper>
  )
}
