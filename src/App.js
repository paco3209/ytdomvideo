import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';


const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);
  const [contador, setcontador] = useState(1);
  
  
  const letters = ["MVI", "DSC", "MVI"];

  useEffect(() => {
    
    fetchResource();


  }, [])

 

  const fetchResource = async () => {
    const letter = letters[Math.floor(Math.random() * letters.length)]
    const number = Math.floor(Math.random() * 100); 
    const filename = letter + " " + number  
    
      await YTSearch({key: API_KEY, term: filename}, (data) => {
          setVideos(data);
        setSldVideo(data[0]);
        console.log(data);
          
      });
  }

  
  const clickButton = () => {
    
    if (contador === videos.length) {
      fetchResource()
      setcontador(0)
    } else {
      
      
      
      setSldVideo(videos[contador]);
      setcontador(contador + 1);
    }

    
    
  }

  return (
    
    <div className="bg">
      <SearchBar onSearchTermChange={searchTerm => fetchResource(searchTerm)}/>
      <VideoDetail video={sldVideo} />
      <button onClick={clickButton} className="btn btn-primary">Ver siguiente video</button>
      
      
      
      </div>
    
  );
}

export default App;
