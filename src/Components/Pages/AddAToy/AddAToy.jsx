import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const AddAToy = () => {
    useTitle('Add a Toy');

    return (
        <div>
            <h2>Add A Toy</h2>
            <div className='my-[50px] md:my-[130px]'></div>
        </div>
    );
};

export default AddAToy;