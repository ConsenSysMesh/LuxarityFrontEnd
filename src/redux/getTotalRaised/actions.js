export const GET_TOTAL_RAISED = 'GET_TOTAL_RAISED'
export const GET_TOTAL_RAISED_STARTED = 'GET_TOTAL_RAISED_STARTED'
export const GET_TOTAL_RAISED_SUCCEEDED = 'GET_TOTAL_RAISED_SUCCEEDED'
export const GET_TOTAL_RAISED_FAILED = 'GET_TOTAL_RAISED_FAILED'

export const getTotalRaised = (data) => ({
  type: GET_TOTAL_RAISED,
  payload: data,
})
