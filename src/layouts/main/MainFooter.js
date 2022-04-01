import {Link as RouterLink, useLocation, useNavigate} from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {Box, Container, Divider, Grid, Typography, Link, Button} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {grey} from "@mui/material/colors";

//
import Logo from "../../components/Logo";
// import LogoSilbertec from "../../components/LogoSilbertec";
// import SvgIconStyle from "../../components/SvgIconStyle";
import MHidden from "../../components/@material-extend/MHidden";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "fixed",
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0  1.5rem  1.5rem 1.5rem',
  width: '100%',
  bottom: 0,
  // boxShadow: '0px -5px 6px -3px lightgray',
  backgroundColor: 'transparent',
  // borderTop: ".6rem solid " + grey[100],
  // boxShadow: '0px -5px 6px -3px lightgray',
  borderBottom: "1rem solid " + theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    // borderTop: ".6rem solid " + grey[100],
    justifyContent: 'center',

    // borderTop: "3rem solid " + grey[100],
  },
}));

const SocialIconsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  "& img" : {
    "&:hover" : {
      opacity: 0.7,
      cursor: 'pointer'
    },
  },
  [theme.breakpoints.up("md")]: {
    
  },
}));



// function Links() {
//   return (
//     <Grid container>
//       <Grid item xs={12} md={4}>
//         <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
//           POLÍTICAS DE PRIVACIDAD
//         </Typography>
//       </Grid>
//
//       <Grid item xs={12} md={4} sx={{ my: { xs: 1, md: 0 } }}>
//         <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
//           CONDICIONES DE COMPRA
//         </Typography>
//       </Grid>
//
//       <Grid item xs={12} md={4}>
//         <Typography variant="caption" sx={{ fontFamily: "Din-STD-Engschrift" }}>
//           TÉRMINOS LEGALES
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// }

// ----------------------------------------------------------------------

export default function MainFooter() {
  const navigate = useNavigate();

  function goToConsult() {
    navigate('/consulta-online');
  }

  return (
    <RootStyle>
      <MHidden width='mdDown'>
        <SocialIconsWrapper >
          {
            [...Array(3)].map((icon, i) => (
              <img
                src="/static/icons/facebook-logo.png"
                key={i + 1}
                width={30}
                style={{ margin: '0 .5rem ' }}
                alt="facebook logo"/>
            ))

          }
        </SocialIconsWrapper>
      </MHidden>
      <Button variant='contained' onClick={goToConsult} >
        Consulta online
      </Button>
      {/*<Container  sx={{ py: 10 }}>*/}
      {/*  <Grid*/}
      {/*    container*/}
      {/*    justifyContent={{ xs: "center", md: "space-between" }}*/}
      {/*    sx={{ textAlign: { xs: "center", md: "left" } }}*/}
      {/*  >*/}
      {/*    <Grid*/}
      {/*      item*/}
      {/*      xs={6}*/}
      {/*      md={3}*/}
      {/*      sx={{ display: "flex", alignItems: "center" }}*/}
      {/*    >*/}
      {/*      <Logo*/}
      {/*        sx={{*/}
      {/*          height: { xs: 70, sm: 100 },*/}
      {/*          width: { xs: 70, sm: 100 },*/}
      {/*          display: "block",*/}
      {/*          mx: 0,*/}
      {/*          mb: { xs: 2, md: 0 },*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </Grid>*/}
      {/*    <Grid*/}
      {/*      item*/}
      {/*      xs={6}*/}
      {/*      md={3}*/}
      {/*      sx={{ display: "flex", alignItems: "center", pr: 1 }}*/}
      {/*    >*/}
      {/*    </Grid>*/}

      {/*    <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>*/}
      {/*      <Link*/}
      {/*        component={RouterLink}*/}
      {/*        to="/como-funciona-la-plataforma"*/}
      {/*        sx={{ color: "#000", "&:hover": { opacity: 0.7 }, cursor: "pointer", }}*/}
      {/*      >*/}
      {/*        <Box*/}
      {/*          sx={{*/}
      {/*            display: "flex",*/}
      {/*            alignItems: "center",*/}
      {/*            cursor: "pointer",*/}
      {/*            mb: 2,*/}
      {/*            mx: 2,*/}
      {/*            "&:hover": { opacity: 0.7 },*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <ExpandCircleDownIcon*/}
      {/*            sx={{ transform: "rotate(-90deg)", mr: 1 }}*/}
      {/*            color="primary"*/}
      {/*          />*/}
      {/*          <Typography variant="caption">*/}
      {/*            ¿Cómo funciona la plataforma?*/}
      {/*          </Typography>*/}
      {/*        </Box>*/}
      {/*      </Link>*/}

      {/*      /!*<MHidden width="mdUp">*!/*/}
      {/*      /!*  <Divider />*!/*/}
      {/*      /!*  <Box m={2} textAlign="left">*!/*/}
      {/*      /!*    <Links />*!/*/}
      {/*      /!*  </Box>*!/*/}
      {/*      /!*</MHidden>*!/*/}

      {/*      <Divider />*/}

      {/*      <Box m={2} textAlign="left">*/}
      {/*        <Grid container>*/}
      {/*          <Grid item xs={6} md={4}>*/}
      {/*            <Typography variant="caption">Teléfono</Typography>*/}
      {/*            <Box*/}
      {/*              sx={{*/}
      {/*                display: "flex",*/}
      {/*                alignItems: "center",*/}
      {/*                cursor: "pointer",*/}
      {/*                mt: "3px",*/}
      {/*                "&:hover": { opacity: 0.7 },*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <Typography variant="caption">+56 2 0000 000</Typography>*/}
      {/*            </Box>*/}
      {/*          </Grid>*/}

      {/*          <Grid item xs={6} md={4}>*/}
      {/*            <Typography variant="caption">Dirección</Typography>*/}
      {/*            <Box*/}
      {/*              sx={{*/}
      {/*                display: "flex",*/}
      {/*                alignItems: "center",*/}
      {/*                cursor: "pointer",*/}
      {/*                mt: "3px",*/}
      {/*                "&:hover": { opacity: 0.7 },*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <Typography variant="caption">*/}
      {/*                Psje. Nombre ejemplo*/}
      {/*              </Typography>*/}
      {/*            </Box>*/}
      {/*          </Grid>*/}

      {/*          <Grid item xs={12} md={4} sx={{ mt: { xs: 2, md: 0 } }}>*/}
      {/*            <Typography variant="caption">Encuéntranos en</Typography>*/}
      {/*            <Box*/}
      {/*              sx={{*/}
      {/*                display: "flex",*/}
      {/*                alignItems: "center",*/}
      {/*                cursor: "pointer",*/}
      {/*                mt: "3px",*/}
      {/*                "&:hover": { opacity: 0.7 },*/}
      {/*              }}*/}
      {/*            >*/}
      {/*              <Typography variant="caption">/gotec</Typography>*/}
      {/*            </Box>*/}
      {/*          </Grid>*/}
      {/*        </Grid>*/}
      {/*      </Box>*/}

      {/*      /!*<MHidden width="mdDown">*!/*/}
      {/*      /!*  <Divider />*!/*/}
      {/*      /!*  <Box mt={2} mx={2}>*!/*/}
      {/*      /!*    <Links />*!/*/}
      {/*      /!*  </Box>*!/*/}
      {/*      /!*</MHidden>*!/*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Container>*/}
    </RootStyle>
  );
}
