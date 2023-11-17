/*import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
const setLocalStorage = (id: string, data: { data: string; }) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};
describe("Set local storage item", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("data is added into local storage", () => {
    const mockId = "111";
    const mockJson = { data: "json data" };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test("data in local storage which is overwritten", () => {
    const mockId = "222";
    const mockOldData = { data: "json data" };
    const mockNewData = { data: " new data" };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });

 // test("only one ID is in localStorage", () => {
 //   const mockId = "333";
//    const mockOldData = { data: "json data" };
 //   const mockNewData = { data: " new data" };

 //   window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
//    setLocalStorage(mockId, mockNewData);

//    const allItems = window.localStorage.getAll();

 //   expect(Object.keys(allItems).length).toBe(1);
    screen.debug()
  //});
});
/*import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Seach from './Seach';

describe('Search component', () => {
  it('should save the input value to local storage on button click', () => {
    const enterHandler: jest.Mock<void, [string]> = jest.fn();
    const setSearch: jest.Mock<void, [string]> = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Seach enterHandler={enterHandler} isActive={true} setSearch={setSearch} />
    );
    
    const input:HTMLInputElement = getByPlaceholderText('Enter the name of the beer') as HTMLInputElement;
    const button: HTMLButtonElement = getByText('Search') as HTMLButtonElement;
    
    //input.value = 'Test beer'; // установка значения input
   // fireEvent.input(input);
  //  fireEvent.click(button);
  fireEvent.change(input, { target: { value: 'Test beer' } });
  fireEvent.click(button);
    expect(enterHandler).toHaveBeenCalledWith('Test beer');
    expect(setSearch).toHaveBeenCalledWith('Test beer');
  });
});*/
