import * as Types from '../constants/Actiontype';
import callApi from "../../src/utils/apiCaller";
import products from '../reducers/products';


export const actFetchProductRequest = () =>{
    return (dispatch) =>{
        return callApi('products','GET',null).then(res=>{
            dispatch(actFetchProduct(res.data))
        })
    }
}

export const actFetchProduct = (product)=> {
    return{
        type : Types.FETCH_PRODUCT,
        product
    }
}
export const actDeleteProductRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id)=> {
    return{
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) =>{
    return (dispatch) =>{
        return callApi('products','POST',product).then(res=>{
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actAddProduct = (product)=> {
    return{
        type : Types.ADD_PRODUCT,
        product
    }
}
export const actGetProductRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`,'GET',null).then(res => {
            dispatch(actGetProduct(res.data));
            console.log("res",res.data);
        });
    }
}

export const actGetProduct = (product)=> {
    return{
        type : Types.EDIT_PRODUCT,
        product,
    }
}

export const actUpdateProductRequest = (product) =>{
    return (dispatch) =>{
        return callApi(`products/${product.id}`,'PUT',product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product)=> {
    return{
        type : Types.UPDATE_PRODUCT,
        product,
    }
}


