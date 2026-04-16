import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto mt-20'>
                <div className='text-center'>
                <h3 className='font-bold text-[48px]'>Friends to keep close in your life</h3>
                <p className='text-[16px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                <button className='btn bg-[#1F5C4D] mt-6 text-[#FFFFFF]'><IoAddOutline />Add a Friend</button></div>
            </div>

            <div className='container mx-auto mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='shadow-2xl rounded-2xl text-center  pb-8'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>10</h2>
                    <h4 className='text-[#64748B] text-[18px]'>Total Friends</h4>
                </div>
                <div className='shadow-2xl rounded-2xl text-center pb-8'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>03</h2>
                    <h4 className='text-[#64748B] text-[18px]'>On Track</h4>
                </div>
                <div className='shadow-2xl rounded-2xl text-center pb-8'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>06</h2>
                    <h4 className='text-[#64748B] text-[18px]'>Need Attention</h4>
                </div>
                <div className='shadow-2xl rounded-2xl text-center pb-8'>
                    <h2 className='font-semibold text-[32px] text-[#244D3F]'>12</h2>
                    <h4 className='text-[#64748B] text-[18px]'>Interactions This Month</h4>
                </div>

                
            </div>
            
        </div>
    );
};

export default Home;