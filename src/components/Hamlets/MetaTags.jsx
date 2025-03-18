import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import landingCover from '../../assets/book/book-landing-hero-ai.jpg';
import appCover from '../../assets/hero_background-1.jpg'

const MetaTags = () => {
  const location = useLocation();
  const isBookLanding = location.pathname.includes("book-landing"); // Provera URL-a

  return (
    <Helmet>
      {isBookLanding ? (
        <>
          <title>Unmazing Life – A Transformational Journey</title>
          <meta name="description" content="Unmazing Life challenges the way we think about happiness, success, and personal growth. Discover how to redefine your path with J.P. Taylor's insightful book." />
          <meta property="og:title" content="Unmazing Life – A Transformational Journey" />
          <meta property="og:description" content="Break free from the chase and start choosing fulfillment. Read Unmazing Life by J.P. Taylor." />
          <meta property="og:image" content={landingCover} />
          <meta property="og:url" content="https://stefan4012it.github.io/unmazinglife-frontend/#/book-landing" />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <>
          <title>Welcome to Our Website – Explore More</title>
          <meta name="description" content="Discover our features, read our blog, and find answers to your questions. Explore what makes our platform unique." />
          <meta property="og:title" content="Welcome to Our Website" />
          <meta property="og:description" content="Find out more about our platform and what we offer." />
          <meta property="og:image" content={appCover} />
          <meta property="og:url" content="https://stefan4012it.github.io/unmazinglife-frontend/" />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
    </Helmet>
  );
};

export default MetaTags;
