import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';

import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify';
import useSongInfo from '../hooks/useSongInfo';

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if(!songInfo) {
      console.log(spotifyApi.getMyCurrentPlaybackState())
      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        console.log('currently playing >>> ', data)
        setCurrentIdTrack(data.body?.item?.id)

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    } 
  };

  useEffect(() => {
    if(spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);

  return (
    <div>
      <div>
        {/* {console.log(songInfo)} */}
        <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt=''/>
      </div>
    </div>
  );
};

export default Player;