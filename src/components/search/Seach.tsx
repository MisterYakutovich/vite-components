import { useDispatch, useSelector } from 'react-redux';
import styles from './Seach.module.css';
import { RootState } from '@/src/redux/store';
import { setSearch } from '@/src/redux/slices/stateSearchSlice';
import { useEffect } from 'react';

interface SearchProps {
  enterHandler: (search: string) => void;
}
function Seach({ enterHandler }: SearchProps) {
  const search = useSelector((state: RootState) => state.input.search);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value;

    dispatch(setSearch(inputSearch));
  };
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enterHandler(search);
    }
  };
  const searchKey = 'searchInput';

  useEffect(() => {
    const savedSearch = localStorage.getItem(searchKey);
    if (savedSearch) {
      dispatch(setSearch(savedSearch));
    }
  }, [searchKey, dispatch]);

  useEffect(() => {
    localStorage.setItem(searchKey, search);
  }, [search, searchKey]);
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
