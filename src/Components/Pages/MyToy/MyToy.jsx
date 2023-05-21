import React, { useContext } from 'react';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext);
    useTitle('My Toy');

    return (
        <div>
            <h2>My Toy</h2>
        </div>
    );
};

export default MyToy;