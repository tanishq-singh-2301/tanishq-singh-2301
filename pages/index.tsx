import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='h-full max-w-screen flex justify-start items-center flex-col relative'>
      <Head>
        <title>Tanishq Singh</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="tanishq singh's github profile" />
      </Head>

      <main className='h-full w-full mx-auto py-6 px-6 sm:px-10 lg:px-8 flex justify-center items-center flex-col'>
        <h1 className='italic font-normal text-white text-xl underline underline-offset-4'>tanishq singh</h1>
        <p className='font-thin italic mt-5 text-white text-lg'>Currently working on it.</p>
      </main>

    </div >
  );
};

export default Home;