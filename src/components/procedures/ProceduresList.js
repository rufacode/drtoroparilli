import {Divider, Grid, List, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";
import {useEffect, useState} from 'react';
import {procedureList} from '../../utils/mock-data/procedures';
import ProcedureDetail from "./ProcedureDetail";
import * as Scroll from 'react-scroll';

export default function ProceduresList({state, fn}) {
  const [filtered, setFiltered] = useState([]);
  // const [selectedItem, setSelectedItem] = useState({});
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

  function scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop)
  }

  function selectItem(value) {
    const scroll = Scroll.animateScroll;
    setSelectedValue({
      ...value
    })
    scroll.scrollToBottom();
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
              <Typography variant='h4' align='center'> Cirugia corporal</Typography>
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
                          {el.name}
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
              <Typography variant='h4' align='center'> Cirugia facial</Typography>
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
                          {el.name}
                        </ListItemText>
                      </ListItemButton>
                      <Divider/>
                    </>
                  ))
                }
              </List>
            </Grid>
            <Grid item xs={12} md={4} sx={{px: 1}}>
              <Typography variant='h4' align='center'> Tratamientos</Typography>
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
                          {el.name}
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
        <Grid item xs={12} sx={{mt: 10, mx: 2}}>
          <ProcedureDetail item={selectedValue}/>
        </Grid>
      }
    </>

  )
}
