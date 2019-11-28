import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.PURCHASE_BURGER_INIT:
      return updateObject(state, { purchased: false });
    case actionsTypes.PURCHASE_BURGER_START:
      return updateObject(state, { loading: true });
    case actionsTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.order.Id });
      return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      });
    case actionsTypes.PURCHASE_BURGER_FAIL:
      return updateObject({ loading: false });
    case actionsTypes.FETCH_ORDERS_START:
      return updateObject({ loading: true });
    case actionsTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, {
        orders: action.orders,
        loading: false
      });
    case actionsTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
