import {useDispatch} from "../../redux/store";
import {useEffect} from "react";
import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {Box, Grid, Typography} from "@mui/material";
import {teamData} from "../../utils/mock-data/teamData";
import {styled} from "@mui/material/styles";


const SpecialBox = styled(Box)(({theme}) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}))

export default function Team() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/team.jpg'));
  }, [])

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h4' fontWeight='bold'>
        El EQUIPO
      </Typography>
      <Typography variant='h6' sx={{ mb: 3 }}>
        Profesionales altamente capacitados
      </Typography>
      <Box sx={{ overflowY: 'auto', maxHeight: '305px' }}>
        {
          teamData.map((member, i) => (
            <SpecialBox sx={{ mb: 4 }} key={i + 1}>
              <Box component='img' src={member.img} width={162} height={210} />
              <Box sx={{ px: 2 }}>
                <Typography variant='h6' sx={{ mb: 2 }}>{member.name} - {member.role}</Typography>
                <Typography variant='body1'>{member.desc}</Typography>
              </Box>
            </SpecialBox>
          ))
        }
      </Box>
    </Box>
  )
}
 
