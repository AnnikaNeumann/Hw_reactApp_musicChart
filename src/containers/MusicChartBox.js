import React, { useState, useEffect } from 'react';
import MusicList from '../components/MusicList';

const MusicChartBox = () =>{

        const[songs, setSongs] = useState([]);

    useEffect(() =>{
        getSongs();
    },[])

    const getSongs = function(){
    fetch ('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(result => result.json())
    // .then(song => console.log(song))
    .then(songs => setSongs(songs.feed.entry));
    

}

return(
    <div>
        <MusicList songs={songs}/>
    </div>

)
}


export default MusicChartBox;

