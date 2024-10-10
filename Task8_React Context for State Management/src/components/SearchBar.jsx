import React, { useRef, useEffect } from 'react';

const SearchBar = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Students to implement focus on mount
    }, []);

    return (
        <input type="text" placeholder="Search profiles..." ref={inputRef} />
    );
};

export default SearchBar;
