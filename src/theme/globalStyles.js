// material
import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import {useSelector} from "../redux/store";

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const { backgroundImage } = useSelector(state => state.backgroundImage)

  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          background: `url(${backgroundImage}) no-repeat  fixed`,
          backgroundSize: '100% 100%',
          width: '100%',
          height: '100%',

          // "&::-webkit-scrollbar": {
          //   width: '1em',
          // },
          // "&::-webkit-scrollbar-track": {
          //   boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
          // },
          // "&::-webkit-scrollbar-thumb": {
          //   backgroundColor: 'red',
          //   outline: '1px solid slategrey',
          // }
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::placeholder': {
            color: theme.palette.text.disabled
          }
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms'
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)'
        }
      }}
    />
  );
}
