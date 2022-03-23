import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "../../redux/store";
import {Form, FormikProvider, useFormik} from "formik";
import {ContactSchema} from "../../utils/formSchemas";
import {Contact} from "../../redux/slices/formsSlice";
import {Box, Button, Container, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography} from "@mui/material";

export default function ContactForm() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.forms.status);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));



  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      homePhone: "",
      phone: "",
      message: "",
      document: "",
      reason: "",
      howDidYouKnow: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, {setErrors, setSubmitting, resetForm}) => {
      try {
        setSubmitting(true);
        await sleep(2500);
        console.log(values);
        // await dispatch(Contact(values));
        // snackbar
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.error(error);
        // snackbar
        resetForm();
        setSubmitting(false);
      }
    },
  });

  const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps} =
    formik;

  return (
    <Container sx={{py: {xs: 5}}}>
      <Paper maxWidth={800} width="100%" display="block" mx="auto" sx={{ backgroundColor: '#fff', p: 4 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" novalidate onSubmit={handleSubmit}>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">Nombre *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("name")}
                  size="small"
                  placeholder="Escribir texto"
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">Apellido *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("lastname")}
                  size="small"
                  placeholder="Escribir texto"
                  error={Boolean(touched.lastname && errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">Teléfono fijo *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("homePhone")}
                  size="small"
                  placeholder="+ 56 9 0000 0000"
                  error={Boolean(touched.homePhone && errors.homePhone)}
                  helperText={touched.homePhone && errors.homePhone}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">Teléfono de contacto *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("phone")}
                  size="small"
                  placeholder="+ 56 9 0000 0000"
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">Email *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("email")}
                  size="small"
                  placeholder="mail@ejemplo.com"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">DNI / Cedula *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("document")}
                  size="small"
                  placeholder="mail@ejemplo.com"
                  error={Boolean(touched.document && errors.document)}
                  helperText={touched.document && errors.document}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">Asunto *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("reason")}
                  size="small"
                  placeholder="mail@ejemplo.com"
                  error={Boolean(touched.reason && errors.reason)}
                  helperText={touched.reason && errors.reason}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">¿Como se entero de nosotros? *</Typography>
                <FormControl variant="outlined" sx={{ mb: 2 }} fullWidth>
                  <Select
                    labelId="howDidYouKnow"
                    id="howDidYouKnow"
                    size='small'
                    {...getFieldProps("howDidYouKnow")}
                  >
                    <MenuItem value=''>Seleccione una opcion</MenuItem>
                    <MenuItem value='Cárnica'>Cárnica</MenuItem>
                    <MenuItem value='Fruta y vertuda'>Fruta y vertuda</MenuItem>
                    <MenuItem value='Pesquera'>Pesquera</MenuItem>
                    <MenuItem value='Panadería'>Panadería</MenuItem>
                    <MenuItem value='Vegano'>Vegano</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Typography variant="body1">Mensaje</Typography>
            <TextField
              fullWidth
              multiline
              minRows={8}
              maxRows={10}
              type="text"
              {...getFieldProps("message")}
              size="small"
              placeholder="Escribir texto"
              error={Boolean(touched.message && errors.message)}
              helperText={touched.message && errors.message}
              sx={{mb: 3}}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting || !formik.isValid}
              sx={{display: "block", mx: "auto"}}
            >
              {isSubmitting && 'Enviando...'}
              {!isSubmitting && 'Go'}
            </Button>
          </Form>
        </FormikProvider>
      </Paper>
    </Container>
  )
}
 
