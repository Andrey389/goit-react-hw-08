import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
    >
      <Form className={css.form}>
        <label htmlFor="" className={css.group}>
          Username
          <Field type="username" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </label>
        <label htmlFor="" className={css.group}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="spam" />
        </label>
        <label htmlFor="" className={css.group}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btnForm}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
