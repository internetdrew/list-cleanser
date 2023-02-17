import { list } from 'postcss';
import Playlist from './Playlist';

const Playlists = ({ playlists }) => {
  console.log(playlists);
  return (
    <div className='border-2 border-black rounded-2xl  shadow-[2px_2px_2px_1px_rgb(0,0,0,1)]'>
      <header className='text-center border-b-2 border-black'>
        <div>
          <h2 className='text-xl p-2'>Choose a playlist to clean below:</h2>
        </div>
      </header>
      <div className='max-h-96 overflow-y-scroll p-4 scrollbar-hide'>
        <div className='space-y-4'>
          {playlists.map(playlist => (
            <Playlist key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
      <p className='text-center border-t-2 border-black p-2'>
        Scroll to see more
      </p>
    </div>
  );
};

export default Playlists;
