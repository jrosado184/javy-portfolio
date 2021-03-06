import React from "react";
import me from "../assets/me.webp";
import { ReactComponent as HtmlLogo } from "../assets/logos/html.svg";
import { ReactComponent as ReactLogo } from "../assets/logos/react.svg";
import { ReactComponent as CSSLogo } from "../assets/logos/css.svg";
import { ReactComponent as JSLogo } from "../assets/logos/js.svg";
import { ReactComponent as NodeLogo } from "../assets/logos/node.svg";
import { ReactComponent as PGLogo } from "../assets/logos/pgsql.svg";
import { ReactComponent as JestLogo } from "../assets/logos/jest.svg";
import { ReactComponent as GHLogo } from "../assets/logos/github.svg";
import { ReactComponent as VercelLogo } from "../assets/logos/vercel.svg";
import { ReactComponent as HerokuLogo } from "../assets/logos/heroku.svg";
import { ReactComponent as TailwindLogo } from "../assets/logos/tailwind.svg";
import { ReactComponent as FirebaseLogo } from "../assets/logos/firebase.svg";
import { ReactComponent as TSLogo } from "../assets/logos/ts.svg";
import { ReactComponent as ReduxLogo } from "../assets/logos/redux.svg";
import { ReactComponent as GitLogo } from "../assets/logos/git.svg";

const About = () => {
  return (
    <div className='w-full'>
      <div className='md:flex'>
        <div className='w-full h-full flex flex-col items-center my-16 md:w-[50%]'>
          <div id='about' className='flex flex-col items-center'>
            <h1 className='font-custom text-3xl dark:text-neutral-100 desktop:text-5xl'>
              Welcome to my page!
            </h1>
            <h2 className='font-custom text-gray-900 text-1xl ml-20 desktop:text-3xl desktop:ml-80 dark:text-neutral-100'>
              My name is Javier Rosado.
            </h2>
            <div className='flex flex-col desktop:flex-row justify-center items-center'>
              <img className='w-96' src={me} alt='author' />
              <button className='w-24 h-10 font-custom ml-8 bg-gray-900 text-neutral-100 rounded-md animate-bounce'>
                <a
                  href='https://docs.google.com/document/d/1BiUdLN4Lq72yS2iGwXbwPcu4cOjIs__u/edit?usp=sharing&ouid=106553958242504573354&rtpof=true&sd=true'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='py-14 flex flex-col items-center md:w-[50%] lg:h-[100vh] dark:bg-gray-700'>
          <h3 className='font-custom text-3xl dark:text-neutral-100 my-6 desktop:text-4xl'>
            Full Stack Web Developer
          </h3>
          <div className='w-[70%] flex flex-wrap items-start justify-evenly gap-8 md:w-[73%] h-[30%]'>
            <div className='flex flex-col justify-center items-center'>
              <HtmlLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <CSSLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <JSLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>JavScript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <TSLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>
                Typescript
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ReactLogo className='w-20 h-20 animate-spin-slow' />
              <p className='font-custom m-2 dark:text-neutral-100'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <JestLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Jest</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <ReduxLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Redux</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <NodeLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Node</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <FirebaseLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Firebase</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <PGLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>
                PostgreSQL
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <VercelLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Vercel</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <HerokuLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Heroku</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <GHLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Github</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <GitLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Git</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <TailwindLogo className='w-20 h-20' />
              <p className='font-custom m-2 dark:text-neutral-100'>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
