import React from 'react';

function useLocalstorage (key, initialValue)  {
    
    const [storedValue, setStoredValue] = useState(()=> {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
}