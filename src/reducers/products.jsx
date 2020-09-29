import * as Types from '../constants/Actiontype';
let initialState = [];
let findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

const products = (state=initialState , action)=>{
    let index = -1;
    let { id,product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.product;
            return [...state];

        case Types.DELETE_PRODUCT: 
            index=findIndex(state,id)
            state.splice(index, 1)
            return[...state]

        case Types.ADD_PRODUCT:
            state.push(action.product)
            return[...state]

        case Types.UPDATE_PRODUCT:
            index = findIndex(state,product.id)
            state[index]=product;
        return[...state]
            
        default: return [...state]
    }
}
export default products