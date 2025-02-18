import {render,screen} from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {act} from 'react-dom/test-utils';

test('App render pages correctly', ()=>{
    render(<App/>, {wrapper: BrowserRouter});

    act(() => {
        userEvent.click(screen.getByRole('button', {name: /View Campgrounds/i}))

    })


    expect(screen.getByText(/View our hand-picked campgrounds from all over the world, or add your own./i)).toBeInTheDocument();
    
})