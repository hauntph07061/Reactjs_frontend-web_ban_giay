// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const AddFormProduct = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const hitstory=useHistory();
    const onSubmit = (data) => {
        // console.log(data,"aa");
        const fakevalue = {
            id: Math.random().toString(23).substring(7),
            ...data
        };
        props.onAdd(fakevalue);
        hitstory.push("/admin/product")
    }
    return (
        <div>
            <div className=" mt-3 pb-2 mb-3 border-bottom ">
                <h2 className="h2 text-center ">Thêm sản phẩm</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label " >Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        {...register("name", { required: true})}
                    />
                    {errors.name && <span className="text-danger">Không được để trống tên sản phẩm</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        {...register("price", { required: true,maxLength:10 })}
                    />
                    {errors.price && <span className="text-danger">không được để trống giá sản phẩm </span>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        {...register("img", { required: true})}
                    />
                    {errors.img && <span className="text-danger">không được để trống ảnh sản phẩm </span>}
                </div>
    
                <div className="mb-3">
                    <label className="form-label">Tình trạng</label>
                    <select className="form-control"
                        {...register("status")}
                    >
                        <option value="false">hết hàng</option>
                        <option value="true">còn hàng</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary"> Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default AddFormProduct
