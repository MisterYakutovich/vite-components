import React, { useContext } from 'react';
import './Seach.css';
import { SearchContext } from '../main/Main';

interface SearchProps {
  enterHandler: (search: string) => void;
  isActive: boolean;
  search: string;
  setSearch: (search: string) => void;
}
function Seach({ enterHandler, isActive, search, setSearch }: SearchProps) {
  const searchContext = useContext<null | string>(SearchContext);
  console.log(searchContext);
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enterHandler(search);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <>
      {isActive ? (
        <div className="container-row_newstyle">
          <div className="input-field_newstyle colnewstyle s12newstyle">
            <input
              type="text_newstyle"
              value={search}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button
              className="btn_newstyle"
              onClick={() => enterHandler(search)}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button className="btn" onClick={() => enterHandler(search)}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Seach;
