import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es requerido"),
  lastname: Yup.string().required("Este campo es requerido"),
  document: Yup.string().required("Este campo es requerido"),
  email: Yup.string().email('Ingresa un email valido').required("Este campo es requerido"),
  phone: Yup.string().required('Este campo es requerido'),
  homePhone: Yup.string().required('Este campo es requerido'),
  reason: Yup.string().required('Este campo es requerido'),
  howDidYouKnow: Yup.string().required('Este campo es requerido'),
  message: Yup.string().required('Este campo es requerido'),
});
