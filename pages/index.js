import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='bg-[#ede0d4] h-screen overflow-y-hidden relative'>
        <div className='text-center py-10'>
          <h1 className='text-3xl'>ListCleanser</h1>
          <p className='text-2xl'>
            Make your favorite cuss-up-music playlists family-friendly(ish).
          </p>
        </div>
        <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <a
            href=''
            className='p-2 border-solid border-2 border-black text-xl shadow-[4px_4px_2px_1px_rgb(0,0,0,1)]'
          >
            Login to Spotify
          </a>
        </div>
      </section>
    </>
  );
}
