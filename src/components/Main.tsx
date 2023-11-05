import { useState, useEffect } from 'react';
import './Main.css';

interface BeerProps {
  searchName: BeersSearch[];
  arrResult: BeersSearch[];
}
interface BeersArray {
  name: string;
  image_url: string;
  id: string;
}
interface BeersSearch {
  name: string;
  image_url: string;
  id: string;
}
function Main({ searchName, arrResult }: BeerProps) {
  const [items, setItems] = useState<BeersArray[]>([]);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=10')
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);
  if (searchName.length === 0) {
    searchName.push(...arrResult);
  }
  return (
    <section className="section-main">
      <div className="container">
        {searchName.length == 0
          ? items.map((i) => (
              <div key={i.id} className="card">
                <img
                  className="card_img"
                  key={i.image_url}
                  src={i.image_url}
                  alt=""
                ></img>
                <p key={i.name} className="card_title">
                  {i.name}
                </p>
              </div>
            ))
          : searchName.map((i) => (
              <div key={i.id} className="card">
                <img
                  className="card_img"
                  key={i.image_url}
                  src={i.image_url}
                  alt=""
                ></img>
                <p key={i.name} className="card_title">
                  {i.name}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
export default Main;
