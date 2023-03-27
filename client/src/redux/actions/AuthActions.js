import * as AuthApi from "../../api/AuthRequests";


export const logIn = (formData) => async (dispatch) => {


    try {

        const { data } = await AuthApi.logIn(formData);

    } catch (error) {
        console.log(error);
    }

}