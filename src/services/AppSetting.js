import * as opsService from './Ops'
import * as dataConstants from '../constants/Data.constant'

const get_url = async (data) => {
    try {
        let result = await opsService.postData(dataConstants.mainUrl + `api/api/MobileLogin/Check_IsExist_BaseURL`, data);
        return result;
    } catch (e) {
        return { status: false, data: {}, message: e.message }
    }
} 
export {
    get_url  
}