import React from 'react';
import { get } from "../../api/productAPI";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
const Details = (props) => {

    const [product, setproduct] = useState({});
    const { id } = useParams();
    // const history = useHistory();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await get(id);
                setproduct(data);

            } catch (error) { }
        };
        getProduct();
    }, [id]);
    // history.push("/admin/product");
    return (
        <div className="container-fluid ">
            <div className="row no-gutter mt-5">
                <div className="col-md-6 d-none d-md-flex bg-image" >
                    <img src={product.img} className=" w-100 " />

                </div>
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="">Chi tiết sản phẩm </h3>
                                    <p className="text-muted mb-4">Giảm 5% khi mua online</p>
                                    <form >

                                        <div className="form-group mb-3">
                                            <label>Tên sản sẩm: {product.name}  </label>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Giá sản phẩm: {product.price} VNĐ</label>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>
                                                Trạng thái: {product.status == "true" ? <span className="text-info">Còn hàng</span> : <span className="text-danger">Hết hàng</span>}
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" >Buy</button>
                                        <div className="text-center d-flex justify-content-between mt-4"><p>Snippet by <a href="https://bootstrapious.com/snippets" className="font-italic text-muted">
                                            <u>Boostrapious</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Details
