import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { selectDetails } from './details-slice';
import { clearDetails, loadCountryByName } from './details-slice';

export const useDetails = (name) => {
    const dispatch = useDispatch();
    const {currentCountry, error, status} = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));
    
        return () => {
          dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return [currentCountry, error, status]
}