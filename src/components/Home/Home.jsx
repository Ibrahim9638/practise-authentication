import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const {name} = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-2xl'>{name}</h2>
        </div>
    );
};

export default Home;