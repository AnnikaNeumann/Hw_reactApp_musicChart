import React from "react";
import MusicDetails from "./MusicDetails";


const MusicList = ( { songs }) => {

    const songList = songs.map((song, index) =>{
        <MusicDetails song = {song} key={index}/>

        return <MusicDetails song = {song} key ={index}/>

})


return(

    <div>
    <ul>
    {songList}
    </ul>
    </div>
)

}



export default MusicList;