import { useContext } from 'react';
import './Seach.css';
import { SearchContext } from '../main/Main';

interface SearchProps {
  enterHandler: (search: string) => void;
  isActive: boolean;
  setSearch: (search: string) => void;
}
function Seach({ enterHandler, isActive, setSearch }: SearchProps) {
  const searchContext = useContext<null | string>(SearchContext);
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enterHandler(searchContext!);
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
              value={searchContext!}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button
              className="btn_newstyle"
              onClick={() => enterHandler(searchContext!)}
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
              value={searchContext!}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button
              className="btn"
              onClick={() => enterHandler(searchContext!)}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Seach;
