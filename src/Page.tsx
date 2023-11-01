import React from 'react';
import Seach from './components/Seach';
import Main from './components/Main';

interface PageBeers {
  show: string;
  beer: string[];
  loading: boolean;
  result: string[];
}

class Page extends React.Component<Record<string, never>, PageBeers> {
  state: PageBeers = {
    show: 'index',
    beer: [],
    loading: true,
    result: [],
  };
  componentDidMount() {
    const localData = localStorage.getItem('key');
    const result = localData ? JSON.parse(localData) : [];
    this.setState({ result });
  }
  handleEnter = (search: string): void => {
    if (search.trim() === '') return;
    this.setState({
      loading: true,
      show: 'search',
    });
    search = encodeURIComponent(search);
    const url = `https://api.punkapi.com/v2/beers?beer_name=${search}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          beer: data,
          loading: false       
        });        
        localStorage.setItem('key', JSON.stringify(data));    
      });
  };

  render() {
    return (
      <>
        <Seach enterHandler={this.handleEnter} />
        <Main searchName={this.state.beer} arrResult={this.state.result} />
      </>
    );
  }
}
export default Page;
