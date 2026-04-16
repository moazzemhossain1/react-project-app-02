import React from 'react';

const DataLoad = ({ data }) => {
    console.log(data);
    const { name, picture } = data;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl rounded-2xl">
                <figure className="px-10 pt-10">
                    <img
                        src={picture}
                        alt="Shoes"
                        className="rounded-[50%] text-center object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold text-[20px]">{name}</h2>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataLoad;