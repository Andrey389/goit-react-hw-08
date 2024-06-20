import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Form className={css.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
