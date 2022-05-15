import Card from './Card';
import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';

class App extends React.Component {
    state = {albumlist : [
        {
            "id": 0,
            "title": "Abby Road",
            "artist": "The Beatles",
            "description": "Abbey Road is the eleventh studio album by English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the album were the last in which all four Beatles participated.",
            "year": 1969,
            "image": "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        },
        {
            "id": 1,
            "title": "Prison Bound",
            "artist": "Social Distortion",
            "description": "Prison Bound is the second studio album by Social Distortion, released in 1988",
            "year": 1988,
            "image": "https://upload.wikimedia.org/wikipedia/en/d/d4/Social_Distortion_-_Prison_Bound_cover.jpg"
        },
        {
            "id": 3,
            "title": "Somewhere Between Heaven and Hell",
            "artist": "Social Distortion",
            "description": "Somewhere Between Heaven and Hell is the fourth studio album by the American punk rock band Social Distortion, released on February 11, 1992.",
            "year": 1992,
            "image": "https://upload.wikimedia.org/wikipedia/en/1/1b/Social_Distortion_-_Somewhere_Between_Heaven_and_Hell_cover.jpg"
        }
    ]};

    renderedList = () => {
        return this.state.albumlist.map(

            (album) => {
                return (<Card albumTitle = {album.title} albumDescription = {album.description} buttonText = "OK" imgURL= {album.image}
            />);
            
        } );
    };

    render() {       
        return( 
            <div className="container">
            {this.renderedList()}
          </div>  
        )
    }
} 
export default App;