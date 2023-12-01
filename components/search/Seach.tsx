import styles from './Seach.module.css';

interface SearchProps {
  enterHandler: (search: string) => void;
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
function Seach({
  enterHandler,
  handleChange,
  handleEnter,
  search,
}: SearchProps) {
  return (
    <>
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
    </>
  );
}
export default Seach;
