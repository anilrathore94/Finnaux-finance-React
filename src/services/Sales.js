import * as opsService from "./Ops";
import * as dataConstants from "../constants/Data.constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

const get_sales_menu = async (data) => {
    let base_url = await AsyncStorage.getItem("base_url");
    let token = await AsyncStorage.getItem("token");
    // console.log(token)
    try {
        let result = await opsService.postData(
            base_url + `LOS/LOS_DashboardCount`,
            data,
            token
        );
        return result;
    } catch (e) {
        return { status: false, data: {}, message: e.message };
    }
};
export { get_sales_menu };
