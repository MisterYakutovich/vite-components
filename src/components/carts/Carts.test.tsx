/*import '@testing-library/jest-dom';
import { render,screen,fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import {mockBeerList} from "../../mocks/cardList"
import Carts from './Carts';

test('отображает карту', () => {
    const test: BeersSearch ={
        name: '',
        image_url: '',
        id: ''
    }
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <CartItem i={test} isActive={false} />
      </MemoryRouter>
    );
  
    // Проверка отображения карты
    expect(getByTestId('map')).toBeInTheDocument();
  
    // Нажатие на карту
    fireEvent.click(getByTestId('map'));
  
    // Проверка открытия подробного компонента карты
    expect(getByText('Подробная информация о карте')).toBeInTheDocument();
    screen.debug()
  });*/
