import * as UploadApi from "../../api/UploadRequests";


export const UploadImage = (data) => async (dispatch) => {
    try {
        console.log("Image upload Action start ho gya hy")
        await UploadApi.uploadImage(data);
    } catch (error) {
        console.log(error)
    }
}