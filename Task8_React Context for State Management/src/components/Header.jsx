import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    // Consume context (students will implement the actual logic)
    const {} = useContext(ThemeContext);

    return (
        <header>
            <h1>Profile Website</h1>
            <button>
                {/* Toggle button logic to be added by students */}
            </button>
        </header>
    );
};

export default Header;
