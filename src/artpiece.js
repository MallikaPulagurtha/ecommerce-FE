import React from "react";
import { Link } from "react-router-dom";

function Artpiece(props) {
    return (
        <>
            <div className="col col-4">
                <div>
                    <div class="card">
                        <div><img src={props.data.img} /></div>
                        <div><button className="btn btn-light arttitle">{props.data.productName}</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Artpiece;