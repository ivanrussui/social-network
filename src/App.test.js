import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJSApp from './App';
import ReactDOM from 'react-dom';

// тест как у Димыча
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// изначальный тест
test('renders learn react link', () => {
    render(<App />);
    const spinnerElement = screen.getByRole(/spinner/i);
    expect(spinnerElement).toBeInTheDocument();
});
