import './App.css';
import Page from './Page.tsx';

function App() {
  // const [items, setItems] = useState<BeersArray[]>([]);
  //useEffect(() => {
  //  fetch('https://api.punkapi.com/v2/beers?page=2&per_page=10')
  //   .then((res) => res.json())
  //   .then((result) => setItems(result));
  //}, []);
  return (
    <>
      <Page
        handleClickStyle={function (): void {
          throw new Error('Function not implemented.');
        }}
        isActive={false}
      />
    </>
  );
}
export default App;
