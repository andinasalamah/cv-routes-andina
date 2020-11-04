import { useState, useEffect } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count}`;
    }, [count]);

    return [count, setCount];
};

export default useCount;