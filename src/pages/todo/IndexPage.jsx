import React, { useCallback } from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import { Outlet, useNavigate } from 'react-router-dom'

const IndexPage = () => {


    const navigate = useNavigate();

    const hancleClickList = useCallback(() => {
        navigate({pathname:'list'})
    });

    const hancleClickAdd = useCallback(() => {
        navigate({pathname:'add'})
    });
  return (
    <BasicLayout>
        <div className='w-full flex m-2 p-2'>
            <div 
                className='text-xl m-2 p-2 w-20 font-extrabold text-center underline' 
                onClick={hancleClickList}
            >LIST</div>
            <div 
                className='text-xl m-2 p-2 w-20 font-extrabold text-center underline'
                onClick={hancleClickAdd}
            >ADD</div>
        </div>
        <div className='flex flex-wrap w-full'>
            <Outlet/>
        </div>
    </BasicLayout>
  )
}

export default IndexPage