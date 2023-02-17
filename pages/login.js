import Head from 'next/head';
import { getProviders, signIn } from 'next-auth/react';

const login = ({ providers }) => {
  return (
    <>
      <section className='bg-[#ede0d4] h-screen overflow-y-hidden relative'>
        <div className='text-center my-10'>
          <h1 className='text-xl sm:text-2xl'>ListCleanser</h1>
          <p className='text-lg sm:text-xl'>
            Make your favorite cuss-up-music playlists family-friendly(ish).
          </p>
        </div>
        {Object.values(providers).map(provider => (
          <div
            key={provider.name}
            className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          >
            <button
              href=''
              className='p-2 border-solid border-2 border-black text-sm sm:text-lg shadow-[2px_2px_2px_1px_rgb(0,0,0,1)] active:scale-90 transition-all ease-in-out duration-300'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
