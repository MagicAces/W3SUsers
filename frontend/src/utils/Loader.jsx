import React from 'react'
import { GridLoader } from 'react-spinners';


const Loader = ({ children }) => {
    return (
        <>
            <div className="loader">
                <GridLoader color="#002A5E" />
                <p className='loader-caption'>{ children }</p>
            </div>
        </>
    )
}


export default Loader