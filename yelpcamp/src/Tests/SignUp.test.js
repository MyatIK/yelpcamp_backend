import {render, screen} from '@testing-library/react';
import SignUp from '../Components/SignUp';
import { BrowserRouter } from 'react-router-dom';

test('The Sign Up button is disabled at the start', ()=> {
    render(<SignUp/>, {wrapper:BrowserRouter});

    expect(screen.getByRole("button", {name: /Create an account/i})).toBeDisabled();
})

