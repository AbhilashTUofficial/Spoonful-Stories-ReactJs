import React from 'react';
import "./style.css";


const Pagination = ({ children }) => {
    return (
        // <>
        //     {children}
        // </>
        <div className="paginationCont">
            <div className="contents">
                {children}
            </div>
            <div className="pageNavigation">
                <div className="forwardBtn">{"<"}</div>
                <div className="pages">
                    <div className="page">1</div>
                    <div className="page">2</div>
                    <div className="page">3</div>
                    <div className="betweenPages">...</div>
                    <div className="page">11</div>
                    <div className="page">12</div>
                </div>
                <div className="backwardBtn">{">"}</div>
            </div>
        </div>
    )
}

export default Pagination;