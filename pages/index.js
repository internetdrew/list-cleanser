import { signOut, useSession } from 'next-auth/react';
import useSpotify from '@/hooks/useSpotify';
import { useEffect, useState } from 'react';
import Playlists from '@/components/Playlists';

export default function Home() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  console.log(session);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(data => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <>
      <div className='bg-[#ede0d4] h-screen flex flex-col justify-center items-center'>
        <Playlists playlists={playlists} />
      </div>
    </>
  );
}
