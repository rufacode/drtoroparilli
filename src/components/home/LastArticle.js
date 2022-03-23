import {Box, Button, Typography} from "@mui/material";

export default function LastArticle() {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box component='img' src='/static/dummy/dummy-producto.png' width={200} height={200}/>
        <Box sx={{ p: 2 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>Blog title</Typography>
          <Typography variant='caption'>24/02/2022</Typography>
          <Typography variant='body1' sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci tellus, tincidunt non semper vitae,
            posuere vel felis. Vivamus ultrices turpis et enim ullamcorp mus ultrices turpis et enim ultrices turpis et
            enim ullamcorp mus ultrices turpis et enim
          </Typography>
        </Box>
      </Box>
      <Button variant='contained' fullWidth>Ver mas</Button>
    </>
  )
}
 
