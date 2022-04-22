import { useDispatch, useSelector } from 'react-redux'; 
import {useEffect} from 'react';

import { setTheme } from './theme-slice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, toggleTheme]
}