import React, { useState } from 'react';
import './Seach.css';

interface SearchProps {
  enterHandler: (search: string) => void;
  isActive: boolean;
}
function Seach({ enterHandler, isActive }: SearchProps) {
  const [search, setSearch] = useState<string>('');

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enterHandler(search);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  console.log(isActive);
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
