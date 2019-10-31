import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react'; 

 function useDarkMode (key, initialValue)  {
    const [value, setVal] = useLocalStorage(key, initialValue);

    useEffect(() => {
        let body = document.querySelector('body');
        value === true ?  body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [value]); 

    return  [value, setVal]
    
}

export default useDarkMode