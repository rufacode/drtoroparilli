import {useState} from 'react';
import {useSelector} from "../../redux/store";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

export default function QuestionModal() {
  const [openPreview, setOpenPreview] = useState(false);
  const {sections, isLoading} = useSelector(state => state.language)


  function handleClose() {
    setOpenPreview(false);
  }

  async function showDetail() {
    setOpenPreview(true)
  }

  return (
    <div>
      {
        sections.doubts && !isLoading &&
        <>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            sx={{fontSize: '.85rem', my: 2}}
            onClick={() => showDetail()}
          >
            {sections.doubts.options.modal.title}</Button>
          <Dialog onClose={handleClose} open={openPreview} fullWidth maxWidth="sm">
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4}}>
              <Typography sx={{textAlign: 'center'}}>{sections.doubts.options.modal.title}</Typography>
              <IconButton onClick={handleClose} sx={{p: 1.5}} color='secondary'>
                <DisabledByDefaultIcon/>
              </IconButton>
            </Box>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.doubts.options.modal.fields.name.text}</Typography>
                  <TextField
                    fullWidth
                    type='text'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.doubts.options.modal.fields.lastname.text}</Typography>
                  <TextField
                    fullWidth
                    type='text'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.doubts.options.modal.fields.email.text}</Typography>
                  <TextField
                    fullWidth
                    type='text'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.doubts.options.modal.fields.procedures.text}</Typography>
                  <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                    <Select
                      labelId="Procedures"
                      id="Procedures"
                    >
                      {
                        sections.doubts.options.modal.fields.procedures.options.map(el => (
                          <MenuItem key={el.id} value={el.value}>{el.text}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{sections.doubts.options.modal.fields.comment.text}</Typography>
                  <TextField
                    fullWidth
                    type='text'
                    multiline
                    rows={6}
                  />
                </Grid>
              </Grid>
              <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
                <Button variant='contained'>{sections.doubts.options.modal.buttonText}</Button>
              </Box>
            </DialogContent>
          </Dialog>
        </>
      }
    </div>
  )
}

