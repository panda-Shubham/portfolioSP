import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/logo.svg'; // Import the logo file

const Head = ({ title, description, image }) => {
  const defaultTitle = 'Shubham Panda | Portfolio';
  const defaultDescription = 'Personal portfolio website of Shubham Panda - Software Developer';
  const defaultImage = logo; // Use the imported logo
  const siteUrl = 'https://yourwebsite.com';

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : defaultImage, // Modified to handle imported logo
    url: siteUrl,
  };

  return (
    <Helmet title={seo.title} defaultTitle={defaultTitle} titleTemplate={`%s | Shubham Panda`}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="your-verification-code" />
    </Helmet>
  );
};

export default Head;