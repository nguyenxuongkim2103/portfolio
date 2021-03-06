import Head from 'next/head';
import { Fragment } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {


  return (<Fragment>
    <Head>
      <title>Kim Nguyen - Portfolio</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="90x90" href="/images/icons8-portfolio-90.png" />
      <link rel="icon" type="image/png" sizes="60x60" href="/images/icons8-portfolio-60.png"/>
      <link rel="icon" type="image/png" sizes="30x30" href="/images/icons8-portfolio-30.png"/>
      <link rel="icon" type="image/png" href="https://www.kimnguyen.tech/" />
      <meta
        name='description'
        content='Hi, I am Kim, a web developer based in Finland. I have been working with React.js, Node.js, and MongoDB for more than two years. I am now looking for a career opportunity. Please, feel free contact me if you have any question related to web development.'
      />
      <meta name="og:title" property="og:title" content="Kim Nguyen's web portfolio"/>
      <meta property="og:type" content="website" />
      <meta name="og:description" property="og:description" content="Hi, I am Kim, a web developer based in Finland. I have been working with React.js, Node.js, and MongoDB for more than two years. I am now looking for a career opportunity. Please, feel free contact me if you have any question related to web development." />
      <meta property="og:url" content="https://www.kimnguyen.tech/" />
      <meta property="og:image" content="https://www.kimnguyen.tech/images/kimnguyen.jpg"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  </Fragment>
  );
};

export default Home;
