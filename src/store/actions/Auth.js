export const UPDATE_AUTH = "update_auth"

export const UpdateAuthAction = (data, isLoggedin) => ({
  type: UPDATE_AUTH,
  data: { ...data, isLoggedin },
})
