import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Form>
        <label htmlFor="">
          Email
          <Field type="email" name="email" />
        </label>
        <label htmlFor="">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
