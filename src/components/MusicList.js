import React from "react";
import MusicDetails from "./MusicDetails";
// we import MusicDetails here to be used as a so called Comment


const MusicList = ( { songs }) => {

// We map through the songs array which takes in song and index as parameters
    const songList = songs.map((song, index) =>{
        <MusicDetails song = {song} key={index}/>
// We want to get the prop to render each song and the index (parameters)
        return <MusicDetails song = {song} key ={index}/>

        // JSX Element <MusicDetails/>
})

return(
// We return the songList which we defined as a variable in the anonymus function MusicList
    <div>
    <ul>
    {songList}
    </ul>
    </div>
)

}

export default MusicList;