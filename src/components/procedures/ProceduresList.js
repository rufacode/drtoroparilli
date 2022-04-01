import {Divider, Grid, List, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";
import {useEffect, useState} from 'react';
import {procedureList} from '../../utils/mock-data/procedures';
import ProcedureDetail from "./ProcedureDetail";
import * as Scroll from 'react-scroll';

export default function ProceduresList({state, fn}) {
  const [filtered, setFiltered] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    name: '',
    id: null,
    group: '',
    label: '',
    img: '',
    detail: '',
    questions: []
  });

  function getList(param) {
    const filtered = procedureList.filter((x) => x.label === param)
    setFiltered(filtered);
  }

  function selectItem(value) {
    const scroll = Scroll.animateScroll;
    setSelectedValue({
      ...value
    })
    // scroll.scrollToBottom();


    setTimeout(() => {
      const id = 'container-detail';
      const yOffset = -60;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
  }

  useEffect(() => {
    getList(state);
  }, [state])

  return (
    <>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{p: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{px: 1}}>
              <Typography variant='h4' align='center' fontWeight='bold'> Cirugia corporal</Typography>
              <List>
                {
                  filtered.filter(x => x.group === 'corporal').map((el) => (
                    <>
                      <ListItemButton
                        key={el.id}
                        sx={{py: 2}}
                        onClick={() => selectItem(el)}
                        selected={el.id === selectedValue.id}
                      >
                        <ListItemText sx={{textAlign: 'center'}}>
                          <Typography variant='body1' fontWeight='600'>{el.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                      <Divider/>
                    </>
                  ))
                }
              </List>
            </Grid>
            <Grid item xs={12} md={4}
                  sx={{px: 1, borderRight: '1px solid lightgray', borderLeft: '1px solid lightgray'}}>
              <Typography variant='h4' fontWeight='bold' align='center'> Cirugia facial</Typography>
              <List>
                {
                  filtered.filter(x => x.group === 'facial').map((el) => (
                    <>
                      <ListItemButton
                        sx={{py: 2}}
                        key={el.id}
                        onClick={() => selectItem(el)}
                        selected={el.id === selectedValue.id}
                      >
                        <ListItemText sx={{textAlign: 'center'}}>
                          <Typography variant='body1' fontWeight='600'>{el.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                      <Divider/>
                    </>
                  ))
                }
              </List>
            </Grid>
            <Grid item xs={12} md={4} sx={{px: {xs: 0, md: 2}}}>
              <Typography variant='h4' fontWeight='bold' align='center'> Tratamientos</Typography>
              <List>
                {
                  filtered.filter(x => x.group === 'treatments').map((el) => (
                    <>
                      <ListItemButton
                        sx={{py: 2}}
                        key={el.id}
                        onClick={() => selectItem(el)}
                        selected={el.id === selectedValue.id}
                      >
                        <ListItemText sx={{textAlign: 'center'}}>
                          <Typography variant='body1' fontWeight='600'>{el.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                    </>
                  ))
                }
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {
        selectedValue.name !== '' &&
        <Grid item xs={12} sx={{mt: 10, mx: 2}} id='container-detail' >
          <ProcedureDetail item={selectedValue}/>
        </Grid>
      }
    </>

  )
}
