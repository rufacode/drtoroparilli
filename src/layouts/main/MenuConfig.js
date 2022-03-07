import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import roundGrain from "@iconify/icons-ic/round-grain";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Nosotros",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/panel-de-control.svg',
    path: "/nosotros",
  },
  {
    title: "Procedimientos",
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    svgIcon: '/static/icons/mejor-precio.svg',
    path: "/procedimientos",
  },
  {
    title: "Antes y despues",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/Maintenance-tools.svg',
    path: "/antes-y-despues",
  },
  {
    title: "Consulta online",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/promesa-de-menique.svg',
    path: "/consulta-online",
  },
  {
    title: "Tus dudas",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/formulario-de-contacto.svg',
    path: "/tus-dudas",
  },
  {
    title: "Articulos",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/XMLID_323_.svg',
    path: "/articulos",
  },
  {
    title: "Contacto",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/conversacion.svg',
    path: "/contacto",
  },
];

export default menuConfig;
