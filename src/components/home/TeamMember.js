import {Box, Paper, Typography} from "@mui/material";

export default function TeamMember({member}) {

  return (
    <Paper elevation={3}>
      <Box component='img' src={member.img} sx={{objectFit: 'contain'}} width={'100%'} height={200}/>
      <Box sx={{p: 2}}>
        <Typography variant='h6' align='center' fontWeight='bold' sx={{mb: 2}}>{member.name}</Typography>
        <Typography fontSize='0.8rem' align='center' sx={{mb: 2}}>{member.role}</Typography>
        <Typography variant='body1' align='center' sx={{mb: 2}}>
          {member.desc.substring(0, 250).concat('...')}
        </Typography>
      </Box>
    </Paper>
  )
}
 
