import React from 'react';

// access songs with title.label to return to MusicList

const MusicDetails=( {song} ) =>{

    return(
        <div>
            <p>{song.title.label}</p>
        </div>
    )
}


export default MusicDetails;


// Components can refer to other components in their output. This lets us use the same component abstraction for 
// any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.