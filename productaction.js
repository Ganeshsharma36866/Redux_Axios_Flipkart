import { ActionTypes } from "./actiontype"



export const setproducts=(product)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: product

    };

}
export const selectProducts=(product)=>{
return {
    type:ActionTypes.SELECTED_PRODUCT,
    payload:product

}
}