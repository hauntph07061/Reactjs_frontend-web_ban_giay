import axiosClient from "./axiosClient";

export const getAll =()=>{
    const url=`/products`;
    return axiosClient.get(url);
}
export const get =(id)=>{
    const url=`/products/${id}`;
    return axiosClient.get(url);
}
export const add =(item)=>{
    const url=`/products`;
    return axiosClient.post(url,item);
}
export const remove =(id)=>{
    const url=`/products/${id}`;
    return axiosClient.delete(url);
}
export const edit =(item)=>{
    const url=`/products/${item.id}`;
    return axiosClient.put(url,item);
}