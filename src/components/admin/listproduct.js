import React from 'react';
import { Link } from "react-router-dom";

const Listproduct = (props) => {
    return (
        <div>
            <div >
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="text-info">Admin</h1>
                    <Link to={`/admin/product/add`}>
                        <button type="button" className="btn btn-outline-info">Thêm sản phẩm</button>
                    </Link>

                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên sản phẩm </th>
                                <th scope="col">Giá sản phẩm</th>
                                <th scope="col">Ảnh sản phẩm</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.products.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price} VNĐ</td>
                                    <td> <img src={product.img}width="100" height="45"/></td>
                                    <td>{product.status === "true" ?
                                        (<span className="text-primary">còn hàng</span>)
                                        : (<span className="text-danger">hết hàng</span>)
                                    }
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => props.onDeleteitem(product.id)}>
                                            Delete
                                        </button>
                                        <Link className="btn btn-primary ms-2" to={`/admin/product/${product.id}/edit`}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Listproduct
