import React from "react";
import "./Main.css";

interface SearchState {
  search: string;
  items: string[];
  isLoaded: boolean;
  //error: any;
}
interface BeerProps {
  searchName:string[]
  arrResult:string[]
}
interface BeersArray {
  name:string;
  image_url:string;
  id:string;
}
interface BeersSearch {
  name:string;
  image_url:string;
  id:string;
}
class Main extends React.Component<BeerProps, SearchState> {
  
  state: SearchState = {
    search: "",
    items: [],
    isLoaded: false,
  }   
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers?page=2&per_page=10")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result             
              });
            },           
            () => {
              this.setState({
                isLoaded: true,
              });
            }            
          )
      }
   render() {
    
const arr:BeersArray[]=this.state.items;
const arrSearch:BeersSearch[]=this.props.searchName;
const arrResult:BeersSearch[]=this.props.arrResult;
if (arrSearch.length === 0) {
  arrSearch.push(...arrResult);
}
     return(     
      <section className="section-main">
       <div className="container">
      { this.props.searchName.length==0 ?(
       arr.map((i)=> (
        <div key={i.id} className="card">
          <img className="card_img" key={i.image_url} src={i.image_url} alt=""></img>
          <p key={i.name} className="card_title">{i.name}</p>
        </div>  
       ))):(
        arrSearch.map((i)=> (
          <div key={i.id} className="card">
            <img className="card_img" key={i.image_url} src={i.image_url} alt=""></img>
            <p key={i.name} className="card_title">{i.name}</p>
          </div>        
       )))}
       </div>
      </section>
        )
    }        
    }
export default Main;