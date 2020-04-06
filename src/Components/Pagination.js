import React from 'react';


const Pagination = (props) => {
    return(
        <div className="py-3">
            <button onClick={props.previusPage} type="button" className="btn btn-info mr-1">&larr; Previus</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info mr-1">Next &rarr;</button>
        </div>
    );
}


export default Pagination