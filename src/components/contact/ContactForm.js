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

  const {isLoading, sections} = useSelector(state => state.language)


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
      <Paper maxWidth={800} width="100%" display="block" mx="auto" sx={{backgroundColor: '#fff', p: 4}}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" novalidate onSubmit={handleSubmit}>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{sections.contact.options.form.name.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("name")}
                  size="small"
                  placeholder={sections.contact.options.form.name.placeholder}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{sections.contact.options.form.lastname.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("lastname")}
                  size="small"
                  placeholder={sections.contact.options.form.lastname.placeholder}
                  error={Boolean(touched.lastname && errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{sections.contact.options.form.phone.text}*</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("homePhone")}
                  size="small"
                  placeholder={sections.contact.options.form.phone.placeholder}
                  error={Boolean(touched.homePhone && errors.homePhone)}
                  helperText={touched.homePhone && errors.homePhone}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">{sections.contact.options.form.cellphone.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("phone")}
                  size="small"
                  placeholder={sections.contact.options.form.cellphone.placeholder}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">{sections.contact.options.form.email.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("email")}
                  size="small"
                  placeholder={sections.contact.options.form.email.placeholder}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>

                <Typography variant="body1">{sections.contact.options.form.dni.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("document")}
                  size="small"
                  placeholder={sections.contact.options.form.dni.placeholder}
                  error={Boolean(touched.document && errors.document)}
                  helperText={touched.document && errors.document}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{sections.contact.options.form.reason.text} *</Typography>
                <TextField
                  fullWidth
                  type="text"
                  {...getFieldProps("reason")}
                  size="small"
                  placeholder={sections.contact.options.form.reason.placeholder}
                  error={Boolean(touched.reason && errors.reason)}
                  helperText={touched.reason && errors.reason}
                  sx={{mb: 2}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">{sections.contact.options.form.howDidYouKnow.text} *</Typography>
                <FormControl variant="outlined" sx={{mb: 2}} fullWidth>
                  <Select
                    labelId="howDidYouKnow"
                    id="howDidYouKnow"
                    size='small'
                    {...getFieldProps("howDidYouKnow")}
                  >
                    {
                      sections.contact.options.form.howDidYouKnow.options.map(option => (
                        <MenuItem key={option.id} value={option.text}>{option.text}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Typography variant="body1">{sections.contact.options.form.message.text}</Typography>
            <TextField
              fullWidth
              multiline
              minRows={8}
              maxRows={10}
              type="text"
              {...getFieldProps("message")}
              size="small"
              placeholder={sections.contact.options.form.message.placeholder}
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
              {isSubmitting && sections.contact.options.form.sendingText}
              {!isSubmitting && sections.contact.options.form.buttonText}
            </Button>
          </Form>
        </FormikProvider>
      </Paper>
    </Container>
  )
}
 
