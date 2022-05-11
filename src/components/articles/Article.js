import {Box, Button, Paper, Typography} from "@mui/material";

export default function Article({data}) {
  return (
    <Paper elevation={3} >
      <Box
        component='img'
        height={150}
        width='100%'
        sx={{ objectFit: 'cover' }}
        src={data.img}
        alt=""
      />
      <Box sx={{ p: 3 }}>
        <Typography variant='h5' sx={{ mb: 2 }} fontWeight={'bold'}>{data.title}</Typography>
        <Typography variant='body1' >{data.content.substring(0, 200).concat('...')}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mt: 3 }}>Ver mas</Button>
        </Box>
      </Box>
    </Paper>
  )
}
