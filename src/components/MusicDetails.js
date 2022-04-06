import React from 'react';

const MusicDetails=( {song} ) =>{

    return(
        <div>
            <p>{song.title.label}</p>
        </div>
    )

}


export default MusicDetails;