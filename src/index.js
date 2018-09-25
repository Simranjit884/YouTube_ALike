import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'; 
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyBb1zHlfG3T5y9io9YxbDdtX00d0X8GWTg';

class App extends Component{
   constructor(props){
    super(props);

    this.state={ 
        videos:[],
        selectedVideo:null
    };
    this.videoSearch('taylor swift');
   }  
    
   videoSearch(term){
    YTSearch({key:'AIzaSyBb1zHlfG3T5y9io9YxbDdtX00d0X8GWTg',term:term},data=>{
        this.setState({videos:data,selectedVideo:data[0]});
    });
   }
    
   render(){
       const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return (
            <div>
            <SearchBar onSearchTermChange={term=>(this.videoSearch(term))}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            videos={this.state.videos}
            onVideoSelect={videodata=>this.setState({selectedVideo:videodata})}
            />
            </div>
        );
    }
}
 
ReactDOM.render(<App />,document.querySelector('.container'));