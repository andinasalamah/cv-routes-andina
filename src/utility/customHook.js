import { useState, useEffect } from 'react';

//belum ada useContext di profil

const useTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count}`;
    }, [count]);

    return [count, setCount];
};

export default useTitle;