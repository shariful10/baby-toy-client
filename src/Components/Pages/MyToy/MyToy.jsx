import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const MyToy = () => {
    useTitle('My Toy');

    return (
        <div>
            <h2>My Toy</h2>
        </div>
    );
};

export default MyToy;