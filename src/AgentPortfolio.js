import React, { useState } from 'react';
import './html.css';
//import './print.css';
import Grid from '@mui/material/Grid';
import PPIImg from './PPIImg';

export default function AgentPortfolio() {
  const [mode, setMode] = useState('html');
  //const [mode, setMode] = useState('print');

  const makeNavigatableURL = (url) => {
    if (!url.includes('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  const makeReadableURL = (url) => {
    if (url.includes('https://')) {
      return url.replace(new RegExp('https://', 'gi'), '');
    }
    return url;
  };

  const advisorPortfolio = {
    advisorInformation: {
      firstName: 'Sanish',
      lastName: 'Joseph',
      jobTitle: 'Software Developer',
      designations: 'CLU, TEP',
      phone: '7788708155',
      extension: '222',
    },
    businessInformation: {
      businessName: 'Health Record Stack',
      address: '4510 Halifax way',
      suite: '3333',
      city: 'Burnaby',
      province: 'BC',
      postalCode: 'V5C0K4',
    },
    socialMediaandLinks: {
      twitter: 'https://twitter.com/sanishtj',
      facebook: 'https://m.facebook.com/sanish.joseph/',
      linkedIn: 'https://www.linkedin.com/in/sanishjoseph',
      instagram: 'https://www.instagram.com/sanishtj',
      youTube: 'https://www.youtube.com/user/sanishtj',
      companyWebsite: 'https://sanishjoseph.ca',
    },
    about: {
      biography:
        'A Full-stack Developer with a passion for technology.\n\nPossess over 14 years of experience in developing web applications, as a programmer and a lead. Built and implemented successful web applications using different Microsoft technologies for different areas like health care, analytical testing services, And insurance & banking sector.\n\nHold experience in React, Angular, Typescript, .NET web stack, Node.js, SQL and Mongo DB.',
    },
    images: {
      profileImage:
        '//images.ctfassets.net/ygz4g81yi3jn/tlb-advisor-profileimage-a4647fb9-d8c2-4189-9eb1-32f18d69e9d3/bc2ffa451ac1f1fe23f2edb450901727/advisor-profileimage-a4647fb9-d8c2-4189-9eb1-32f18d69e9d3.jpeg',
      logo: null,
    },
  };

  return (
    <Grid container spacing={1}>
      {advisorPortfolio.images.profileImage && (
        <Grid item xs={mode === 'html' ? 2 : 12}>
          <PPIImg
            src={`${advisorPortfolio.images.profileImage}?${
              mode === "html"
                ? "w=240&h=240&fit=fill&f=face"
                : "w=180&h=180&fit=fill&f=face"
            }`}
          />
        </Grid>
      )}
      <Grid item xs={mode === 'html' ? 10 : 6}>
        <Grid container>
          <Grid item xs={12}>
            <h3 className="h3 Trebuchet bold">
              {advisorPortfolio.advisorInformation.firstName}&nbsp;
              {advisorPortfolio.advisorInformation.lastName}
              {advisorPortfolio.advisorInformation.designations && (
                <>,&nbsp;{advisorPortfolio.advisorInformation.designations}</>
              )}
            </h3>
          </Grid>
          {advisorPortfolio.advisorInformation.jobTitle && (
            <Grid item xs={12}>
              <h4 className="h4 Trebuchet bold" style={{ padding: 0 }}>
                {advisorPortfolio.advisorInformation.jobTitle}
              </h4>
            </Grid>
          )}
          {advisorPortfolio.about.biography && (
            <Grid item xs={12}>
              <span className="p Georgia">
                {advisorPortfolio.about.biography}
              </span>
            </Grid>
          )}
        </Grid>
      </Grid>
      {advisorPortfolio.advisorInformation.email && (
        <Grid item xs={12}>
          <span className="p Trebuchet bold headingColor">Email:</span>
          &nbsp;
          <span className="p Trebuchet">
            {advisorPortfolio.advisorInformation.email}:
          </span>
        </Grid>
      )}
      {advisorPortfolio.advisorInformation.phone && (
        <Grid item xs={12}>
          <span className="p Trebuchet bold headingColor">Phone:</span>
          &nbsp;
          <span className="p Trebuchet">
            {advisorPortfolio.advisorInformation.phone}
            {advisorPortfolio.advisorInformation.extension && (
              <>
                &nbsp;Extension&nbsp;
                {advisorPortfolio.advisorInformation.extension}
              </>
            )}
          </span>
        </Grid>
      )}
      {advisorPortfolio.socialMediaandLinks.companyWebsite && (
        <Grid item xs={12}>
          <span className="p Trebuchet bold headingColor">Website:</span>
          &nbsp;
          <a
            className="p Trebuchet link"
            href={makeNavigatableURL(
              advisorPortfolio.socialMediaandLinks.companyWebsite
            )}
            target="_blank"
            rel="noreferrer"
          >
            {makeReadableURL(
              advisorPortfolio.socialMediaandLinks.companyWebsite
            )}
          </a>
        </Grid>
      )}
      {advisorPortfolio.businessInformation.address && (
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <span className="p Trebuchet bold headingColor">Address:</span>
          </Grid>
          <Grid item xs={12}>
            <span className="p Trebuchet">
              {advisorPortfolio.businessInformation.businessName}
            </span>
          </Grid>
          <Grid item xs={12}>
            <span className="p Trebuchet">
              {advisorPortfolio.businessInformation.address}
            </span>
          </Grid>
          {advisorPortfolio.businessInformation.suite && (
            <Grid item xs={12}>
              <span className="p Trebuchet">
                {advisorPortfolio.businessInformation.suite}
              </span>
            </Grid>
          )}
          <Grid item xs={12}>
            <span className="p Trebuchet">
              {advisorPortfolio.businessInformation.city},&nbsp;
              {advisorPortfolio.businessInformation.province}&nbsp;
              {advisorPortfolio.businessInformation.postalCode}
            </span>
          </Grid>
        </Grid>
      )}
      {(advisorPortfolio.socialMediaandLinks.twitter ||
        advisorPortfolio.socialMediaandLinks.facebook ||
        advisorPortfolio.socialMediaandLinks.linkedIn ||
        advisorPortfolio.socialMediaandLinks.instagram ||
        advisorPortfolio.socialMediaandLinks.youTube) && (
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <span className="p Trebuchet bold headingColor">Social Media:</span>
          </Grid>
          {advisorPortfolio.socialMediaandLinks.twitter && (
            <Grid container item xs={12} spacing={1} alignItems="center">
              <Grid item>
                <PPIImg src="./images/social.media.icons_28x28px_twitter.svg" />
              </Grid>
              <Grid item>
                <a
                  className="p Trebuchet link"
                  href={makeNavigatableURL(
                    advisorPortfolio.socialMediaandLinks.twitter
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeReadableURL(
                    advisorPortfolio.socialMediaandLinks.twitter
                  )}
                </a>
              </Grid>
            </Grid>
          )}
          {advisorPortfolio.socialMediaandLinks.facebook && (
            <Grid container item xs={12} spacing={1} alignItems="center">
              <Grid item>
                <PPIImg src="./images/social.media.icons_28x28px_facebook.svg" />
              </Grid>
              <Grid item>
                <a
                  className="p Trebuchet link"
                  href={makeNavigatableURL(
                    advisorPortfolio.socialMediaandLinks.facebook
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeReadableURL(
                    advisorPortfolio.socialMediaandLinks.facebook
                  )}
                </a>
              </Grid>
            </Grid>
          )}
          {advisorPortfolio.socialMediaandLinks.linkedIn && (
            <Grid container item xs={12} spacing={1} alignItems="center">
              <Grid item>
                <PPIImg src="./images/social.media.icons_28x28px_linkedin.svg" />
              </Grid>
              <Grid item>
                <a
                  className="p Trebuchet link"
                  href={makeNavigatableURL(
                    advisorPortfolio.socialMediaandLinks.linkedIn
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeReadableURL(
                    advisorPortfolio.socialMediaandLinks.linkedIn
                  )}
                </a>
              </Grid>
            </Grid>
          )}
          {advisorPortfolio.socialMediaandLinks.instagram && (
            <Grid container item xs={12} spacing={1} alignItems="center">
              <Grid item>
                <PPIImg src="./images/social.media.icons_28x28px__instagram.svg" />
              </Grid>
              <Grid item>
                <a
                  className="p Trebuchet link"
                  href={makeNavigatableURL(
                    advisorPortfolio.socialMediaandLinks.instagram
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeReadableURL(
                    advisorPortfolio.socialMediaandLinks.instagram
                  )}
                </a>
              </Grid>
            </Grid>
          )}

          {advisorPortfolio.socialMediaandLinks.youTube && (
            <Grid container item xs={12} spacing={1} alignItems="center">
              <Grid item>
                <PPIImg src="./images/social.media.icons_28x28px__youtube.svg" />
              </Grid>
              <Grid item>
                <a
                  className="p Trebuchet link"
                  href={makeNavigatableURL(
                    advisorPortfolio.socialMediaandLinks.youTube
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeReadableURL(
                    advisorPortfolio.socialMediaandLinks.youTube
                  )}
                </a>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
}
