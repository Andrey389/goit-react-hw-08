import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";

const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPages")
);

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
