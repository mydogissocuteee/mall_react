import React from 'react'
import { useParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

const ReadPage = () => {

  const {tno} = useParams()

  return (
    // <div className='text-3xl'>
    //   ReadPages {tno}
    //   queryStr: {queryStr}
    //   <div>
    //     <button onClick={() => moveTomodify(tno)}> Test Modify</button>
    //     <button onClick={moveToList}> Test List</button>
    //   </div>
    // </div>
    <div className='font-extrabold w-full bg-white mt-6'>
      <div className='text-2xl'>
        Todo Read Page Component {tno}

      </div>

      <ReadComponent tno={tno}></ReadComponent>
    </div>
  )
}

export default ReadPage