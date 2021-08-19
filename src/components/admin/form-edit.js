import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../api/productAPI";

const EditFormProduct = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [product, setproduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await get(id);
                setproduct(data);
                reset(data);
            } catch (error) { }
        };
        getProduct();
    }, []);

    const onSubmit = (data) => {
        console.log(data,"aa");
        const fakevalue = {
            id: id,
            ...data
        }
        props.onEdit(fakevalue);
        history.push("/admin/product");

    }
    return (
        <div>
            <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
                <h2 className="h2 text-center ">Quản lý sản phẩm</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label " >Tên sản phẩm </label>
                    <input type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-danger">Không được để trống tên sản phẩm</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        {...register("price", { required: true, maxLength: 10 })}
                    />
                    {errors.price && <span className="text-danger">không được để trống giá sản phẩm </span>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        {...register("img", { required: true })}
                    />
                    {errors.img && <span className="text-danger">không được để trống ảnh sản phẩm </span>}
                </div>
                <div className="col-md-6 d-none d-md-flex bg-image" >
                    <img src={product.img} w-100 />
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
                
                <button type="submit" className="btn btn-primary"> Update  </button>
            </form>
        </div>
    )
}

export default EditFormProduct
