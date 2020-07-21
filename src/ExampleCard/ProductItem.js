import React from 'react'

export default function ProductItem(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.objItem.hinhAnh} alt="asdsad" />
            <div className="card-body">
                <h4 className="card-title">{props.objItem.tenSP}</h4>
                <button className="btn btn-success" onClick={()=>{
                    props.handleSelectPro(props.objItem);
                }}>Chi tiết</button>
                <button type="button" className="btn btn-danger" onClick={()=>{
                    props.handleByuPro(props.objItem);
                }}>Mua</button>
            </div>
        </div>
    )
}
