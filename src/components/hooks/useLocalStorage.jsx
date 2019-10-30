import React from 'react';

function useLocalstorage (key, initialValue)  {
    
    const [storedValue, setStoredValue] = useState(()=> {
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(JSON.stringify(initialValue))
        return initialValue
    });
}