import PropTypes from "prop-types";
// material
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        id="Grupo_6862"
        data-name="Grupo 6862"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 99.42 143.789"
      >
        <g id="Grupo_6832" data-name="Grupo 6832" transform="translate(0 0)">
          <path
            id="Trazado_1945"
            data-name="Trazado 1945"
            d="M18.141,33.152H34.2V56.3c0,11.676-5.838,18.348-17.1,18.348S0,67.973,0,56.3V18.349C0,6.672,5.838,0,17.1,0S34.2,6.672,34.2,18.349v7.089H23.353V17.619c0-5.213-2.293-7.194-5.942-7.194s-5.942,1.981-5.942,7.194V57.026c0,5.212,2.293,7.089,5.942,7.089s5.942-1.877,5.942-7.089V43.578H18.141Z"
            transform="translate(0 0)"
            fill={PRIMARY_MAIN}
          />
          <path
            id="Trazado_1946"
            data-name="Trazado 1946"
            d="M160.825,18.348C160.825,6.672,166.976,0,178.236,0s17.411,6.672,17.411,18.348V56.3c0,11.676-6.151,18.348-17.411,18.348S160.825,67.973,160.825,56.3Zm11.469,38.678c0,5.212,2.293,7.193,5.942,7.193s5.942-1.981,5.942-7.193V17.619c0-5.213-2.293-7.194-5.942-7.194s-5.942,1.981-5.942,7.194Z"
            transform="translate(-120.165 0)"
            fill={PRIMARY_MAIN}
          />
          <path
            id="Trazado_1947"
            data-name="Trazado 1947"
            d="M324.891,64.646l-1.4,10.962-10.961-1.4,1.4-10.962Zm-9.074-6.308,1.891-26.349,3.853-30.2,11.376,1.451-3.853,30.2L324.3,59.421Z"
            transform="translate(-233.517 -1.339)"
            fill={PRIMARY_MAIN}
          />
          <path
            id="Trazado_1948"
            data-name="Trazado 1948"
            d="M0,312.115H31.157v9.164H20.619v54.983H10.538V321.278H0Z"
            transform="translate(0 -233.206)"
            fill="#98989a"
          />
          <path
            id="Trazado_1949"
            data-name="Trazado 1949"
            d="M152.513,339.148h13.838v9.164H152.513V367.1h17.411v9.164H142.433V312.114h27.491v9.164H152.513Z"
            transform="translate(-106.423 -233.205)"
            fill="#98989a"
          />
          <path
            id="Trazado_1950"
            data-name="Trazado 1950"
            d="M304.412,350.177V358.7c0,10.263-5.132,16.128-15.028,16.128s-15.029-5.865-15.029-16.128V325.343c0-10.263,5.132-16.128,15.029-16.128s15.028,5.865,15.028,16.128v6.232h-9.531V324.7c0-4.582-2.016-6.323-5.223-6.323s-5.223,1.741-5.223,6.323v34.64c0,4.582,2.016,6.232,5.223,6.232s5.223-1.649,5.223-6.232v-9.164Z"
            transform="translate(-204.992 -231.039)"
            fill="#98989a"
          />
        </g>
      </svg>
    </Box>
  );
}
