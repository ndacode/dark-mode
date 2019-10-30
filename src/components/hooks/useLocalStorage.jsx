import React from 'react';
import { useState } from 'react';

export const useLocalstorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(()=> {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue, setValue];

    const setValue = value => {
        setStoredValue(value);
        window.localStoray.setItem(key, JSON.stringify(value));
    };
}