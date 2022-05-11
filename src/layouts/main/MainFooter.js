import { useNavigate} from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {Box, Button} from "@mui/material";
import MHidden from "../../components/@material-extend/MHidden";
import {useSelector} from "../../redux/store";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "fixed",
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5rem',
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

// ----------------------------------------------------------------------

export default function MainFooter() {
  const navigate = useNavigate();
  const { sections, isLoading } = useSelector(state => state.language);

  return (
    <RootStyle>
      <MHidden width='mdDown'>
        <SocialIconsWrapper >
          {
            sections.common && !isLoading && sections.common.options.footer.links.map((icon) => (
              <img
                key={icon.id}
                src={icon.img}
                width={30}
                style={{ margin: '0 .5rem ' }}
                alt={icon.title} />
            ))

          }
        </SocialIconsWrapper>
      </MHidden>
      {
        sections.common && !isLoading &&
        <Button variant='contained' onClick={() => navigate(sections.common.options.footer.cta.href)} >
          {sections.common.options.footer.cta.text}
        </Button>
      }
    </RootStyle>
  );
}
