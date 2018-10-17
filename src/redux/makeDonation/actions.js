export const MAKE_DONATION = 'MAKE_DONATION'
export const MAKE_DONATION_STARTED = 'MAKE_DONATION_STARTED'
export const MAKE_DONATION_SUCCEEDED = 'MAKE_DONATION_SUCCEEDED'
export const MAKE_DONATION_FAILED = 'MAKE_DONATION_FAILED'

export const makeDonation = (data) => ({
  type: MAKE_DONATION,
  payload: data,
})
