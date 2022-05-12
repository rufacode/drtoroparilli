import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {useSelector} from "../../redux/store";

export default function ConsultForm() {
const { sections, isLoading } = useSelector(state => state.language)

  return (
    <Box sx={{my: {xs: 15, md: 0}, display: {md: 'grid'}, placeItems: {md: 'center'}, height: {md: '80vh'}}}>
      {
        sections.onlineConsult && !isLoading &&
        <Paper elevation={3} sx={{p: 3}}>
          <Typography>{sections.onlineConsult.options.modal.preview.label}</Typography>
          <TextField
            fullWidth
            placeholder={sections.onlineConsult.options.modal.preview.placeholder}
          />
          <Button sx={{mt: 2}} variant='contained' fullWidth>{sections.onlineConsult.options.modal.preview.actionButton}</Button>
        </Paper>
      }
    </Box>
  )
}
 
