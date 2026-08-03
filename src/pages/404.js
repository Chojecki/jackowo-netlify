import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div className="notfound">
      <div>
        <p className="label">Błąd 404</p>
        <h1>Ta ścieżka prowadzi donikąd</h1>
        <p>
          Strona, której szukasz, nie istnieje — ale nasze konie na pewno czekają
          w stajni.
        </p>
        <Link className="btn btn--gold" to="/">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
