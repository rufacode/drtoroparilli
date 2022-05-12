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
import {useSelector} from "../../redux/store";

export default function OnlineConsultOnline() {
  const [openPreview, setOpenPreview] = useState(false);
  const [other, setOther] = useState(false);

  const { sections, isLoading } = useSelector(state => state.language);

  function handleClose() {
    setOpenPreview(false);
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  async function showDetail() {
    setOpenPreview(true)
  }

  function manageOptionalField(index, length) {
    if (index === length) {
      return setOther(true);
    }
  }

  return (
    <div>
      {
        sections.onlineConsult && !isLoading &&
        <>
          <Button variant='contained' size='small' color='primary' onClick={() => showDetail()}>
            {sections.onlineConsult.options.buttonReportText}
          </Button>
          <Dialog onClose={handleClose} open={openPreview} fullScreen transitionComponent={Transition}>
            <Box sx={{textAlign: 'end'}}>
              <IconButton onClick={handleClose} sx={{p: 1.5}} color='secondary'>
                <DisabledByDefaultIcon/>
              </IconButton>
            </Box>
            <Box sx={{p: 5}}>
              <Typography variant='h6' textAlign='center'>{sections.onlineConsult.options.modal.reportError.title}</Typography>
            </Box>
            <Divider sx={{my: 2}}/>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.name.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.email.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.country.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                  <Divider sx={{my: 2}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.comeFrom.text} *</Typography>
                  <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                    <Select
                      labelId="howDidYouKnow"
                      id="howDidYouKnow"
                      size='small'
                    >
                      {
                        sections.onlineConsult.options.modal.reportError.comeFrom.options.map(option => (
                          <MenuItem key={option.id} value={option.text}>{option.text}</MenuItem>
                        ))
                      }

                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.model.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.browser.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.url.text} *</Typography>
                  <TextField
                    fullWidth
                  />
                  <Divider sx={{my: 2}}/>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.timeOfError.text} *</Typography>
                  <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                    <Select
                      labelId="howDidYouKnow"
                      id="howDidYouKnow"
                      size='small'
                    >
                      {
                        sections.onlineConsult.options.modal.reportError.timeOfError.options.map((option, index, all) => (
                          <MenuItem onClick={() => manageOptionalField(index + 1, all.length)} key={option.id} value={option.text}>{option.text}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </Grid>
                {
                  other &&
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                    />
                  </Grid>
                }
                <Grid item xs={12}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.file.text}</Typography>
                  <Box display='flex' alignItems='center'>
                    <TextField
                      fullWidth
                    />
                    <Button variant='contained' size='large'>{sections.onlineConsult.options.modal.reportError.file.buttonText}</Button>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography>{sections.onlineConsult.options.modal.reportError.description.text} *</Typography>
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
      }
    </div>
  )
}
