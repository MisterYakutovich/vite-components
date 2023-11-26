//import './Seach.css';
import styles from './Seach.module.css';

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
        <div className={styles.container_row_newstyle}>
          <div
            className={`${styles.inputField_newstyle} ${styles.colnewstyle} ${styles.s12newstyle}`}
          >
            <input
              className={styles.search_input}
              type="text_newstyle"
              value={search}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button
              className={styles.btn_newstyle}
              onClick={() => enterHandler(search)}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.row}>
          <div className={`${styles.input_field} ${styles.col} ${styles.s12}`}>
            <input
              className={styles.search_input}
              type="text"
              value={search}
              onChange={handleChange}
              onKeyUp={handleEnter}
              placeholder="Enter the name of the beer"
            />
            <button className={styles.btn} onClick={() => enterHandler(search)}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Seach;
