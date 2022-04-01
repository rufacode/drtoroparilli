import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";



const Circle = styled("div")(({theme}) => ({
  border: "solid",
  borderWidth: 2,
  borderColor: theme.palette.secondary.main,
  width: 30,
  height: 30,
  borderRadius: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 10,
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));


export default function QuestionsList({data}) {
  return (
    <Box sx={{ maxHeight: '440px', overflowY: 'auto', p: 2 }}>
      {
        data && data.questions.map((el, index) => {
          return (
            <Box sx={{mb: 2, mx: 2}} key={el.id}>
              <Accordion sx={{boxShadow: "0px 3px 6px #00000029"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Circle sx={{p: '10px'}}>{index + 1}</Circle>
                  <Typography variant='body1' fontWeight='600' sx={{lineHeight: 1.8, textTransform: 'uppercase', fontFamily: 'InterstateRegular'}}>
                    {el.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/*<Typography*/}
                  {/*  dangerouslySetInnerHTML={{__html: element.Contenido}}*/}
                  {/*/>*/}
                  <Typography>{el.text}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          )
        })
      }
    </Box>
  )
}
