import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup'

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(12).required(), 
})

const initialValues = {
  login: '',
  password: '',
}

export const LoginForm = () => {
  const handleSubmit = (values, {resetForm}) => {
  console.log(values);
  resetForm()
};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form autoComplete="off">
      <label>
        Login
        <Field type="text" name="login" />
        <ErrorMessage name="login" component='div'/>
      </label>
      <label>
        Password
        <Field type="password" name="password" />
        <ErrorMessage name="password" component='div'/>
      </label>
      <button type="submit">Submit</button>
    </Form>
    </Formik>
  );
};
