import * as React from "react"

function Seo({ description, title, author }) {
  const defaultTitle = "Philip Lundin";

  const metaDescription = description || "Check out my portfolio!";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo
