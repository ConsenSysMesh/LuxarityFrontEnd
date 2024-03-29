export const SAFE_REDEEM_ORDER = 'SAFE_REDEEM_ORDER'
export const SAFE_REDEEM_ORDER_STARTED = 'SAFE_REDEEM_ORDER_STARTED'
export const SAFE_REDEEM_ORDER_SUCCEEDED = 'SAFE_REDEEM_ORDER_SUCCEEDED'
export const SAFE_REDEEM_ORDER_FAILED = 'SAFE_REDEEM_ORDER_FAILED'

export const safeRedeemOrder = (data) => ({
  type: SAFE_REDEEM_ORDER,
  payload: data,
})
