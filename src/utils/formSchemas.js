import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email valido').required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Comentarios: Yup.string(),
});
