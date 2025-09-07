import React from "react";
import PageTittle from "./PageTittle";

export default function PageHeading({ tittle, children }) {
  return (
    <div className="page-heading-container">
      <PageTittle tittle={tittle} />
      <p className="page-heading-paragraph">{children}</p>
    </div>
  );
}
