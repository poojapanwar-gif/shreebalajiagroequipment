import { authActions } from "./auth";

export const login = (token, user) => {
    return async(dispatch) => {
        dispatch(
            authActions.login({
                token:token,
                user:user
            })
        )
    }
}