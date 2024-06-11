import React from 'react'

export const SkeletonCard = () => {
    return (
        <div className='skeleton card w-full mx-4 sm:mx-0 sm:w-96 bg-base-100 shadow-xl'>
            <div className='skeleton w-full h-60 mt-4 mx-auto bg-slate-300 rounded-lg mb-4'></div>
            <div className='skeleton card-title h-6 w-3/4 mt-4 ml-4 bg-slate-300 rounded-lg'></div>
            <div className='flex'>
                <div className='skeleton card-title h-5 w-20 mt-4 ml-4 bg-slate-200 rounded-lg'></div>
                <div className='skeleton card-title h-5 w-20 mt-4 ml-4 bg-slate-200 rounded-lg'></div>
            </div>
            <div className='skeleton card-title h-10 w-4/4 mt-4 mx-4 bg-slate-300 rounded-lg mb-4'></div>
        </div>
    )
}