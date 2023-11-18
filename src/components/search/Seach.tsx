import './Seach.css';

interface SearchProps {
  enterHandler: (search: string) => void;
  isActive: boolean;
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
function Seach({
  enterHandler,
  isActive,
  handleChange,
  handleEnter,
  search,
}: SearchProps) {
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
