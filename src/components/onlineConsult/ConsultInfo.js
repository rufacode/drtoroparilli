import {useState, useEffect} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {MHidden} from "../@material-extend";
import OnlineConsultOnline from "./OnlineConsultModal";
import {useSelector} from "../../redux/store";

export default function ConsultInfo() {
  const { sections, isLoading } = useSelector(state => state.language);

  function catchHtml(html) {
    return {
      __html: html
    }
  }

  return (
    <Box sx={{ p: 3, height: {md: '100%'}, backgroundColor: '#307cceab', color: '#fff' }}>
      {
        sections.onlineConsult && !isLoading &&
        <>
          <Typography variant='h1' color='#fff' align='center' sx={{ mb: 3 }}>{sections.onlineConsult.options.title}</Typography>
          <MHidden width='mdDown'>
            <div dangerouslySetInnerHTML={catchHtml(sections.onlineConsult.options.sideContent)} />
          </MHidden>
          <Box
            sx={{
              display: 'flex',
              justifyContent: {xs: 'center', md: 'end'},
              mt: {md: 5, xs: 2}
            }}>
            <OnlineConsultOnline />
          </Box>
        </>
      }
    </Box>
  )
}
 
