import React, { useState, useEffect } from 'react';
import MusicList from './components/MusicList';

const MusicChartBox = () =>{

        const[songs, setSongs] = useState([]);
// songs  to passed on to the {} in the return at the bottom

        // useEffects hook can be to avoid unintentional interaction
    useEffect(() => {
        getSongs();
    },[])

    // function getSongs to fetch API link, then render results on page 
    const getSongs = function(){
    fetch ('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(result => result.json())
    // .then(song => console.log(song))
    .then(songs => setSongs(songs.feed.entry));
    // anonymus function to setSongs to songs we want to feed to page
}

return(
    <div>
        <MusicList songs={songs}/>
        {/* pass in argument for the props */}
    </div>

)
}

export default MusicChartBox;

