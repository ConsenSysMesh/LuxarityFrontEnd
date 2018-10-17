export const REDEEM_ORDER = 'REDEEM_ORDER'
export const REDEEM_ORDER_STARTED = 'REDEEM_ORDER_STARTED'
export const REDEEM_ORDER_SUCCEEDED = 'REDEEM_ORDER_SUCCEEDED'
export const REDEEM_ORDER_FAILED = 'REDEEM_ORDER_FAILED'

export const redeemOrder = (data) => ({
  type: REDEEM_ORDER,
  payload: data,
})
