import {Box, Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import { useState } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ReactPlayer from "react-player";
import Carousel from "./Carousel";

export default function InfoModal({ data}) {
  const [openPreview, setOpenPreview] = useState(false);


  function handleClose() {
    setOpenPreview(false);
  }

  async function showDetail() {
    setOpenPreview(true)
  }

  return (
    <>
      <img src={data.preview}  onClick={() => showDetail()}/>
      <Dialog onClose={handleClose} open={openPreview} fullWidth maxWidth="sm">
        <Box sx={{ display : 'flex', justifyContent: 'space-between', p: 1 }}>
          <DialogTitle sx={{ textAlign: 'center' }}>{data.title}</DialogTitle>
          <IconButton onClick={handleClose} sx={{ p: 1.5}} color='secondary'>
            <DisabledByDefaultIcon />
          </IconButton>
        </Box>
        <DialogContent>
          {
            data.videoURL ? (
              <ReactPlayer
                width='100%'
                url={data.videoURL}
              />
            ) : (
              <Carousel data={data.images} />
            )
          }
        </DialogContent>
      </Dialog>
    </>
  )
}
 
