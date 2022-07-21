import React from 'react'
import {useSearchUSersQuery} from "./../store/github/github.api"

export function HomePage(){
    const {isLoading, isError, data} = useSearchUSersQuery('vladilen')

    
    return(
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            {isError && <p className="text-center text-red-500">Somthing went wrong...</p>}
            <div className='relative w-[560]'>
                <input type="text" className='border py-2 px-2' />
            </div>
        </div>
    )
}