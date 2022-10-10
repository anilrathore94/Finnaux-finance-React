import AsyncStorage from "@react-native-async-storage/async-storage"


const mainUrl = 'http://demo.finnaux.com/'

const base ={
    api: mainUrl +'api/api/',
    token:  AsyncStorage.getItem('token'),
    base_url:  AsyncStorage.getItem('base_url'),

}

export {
    mainUrl,
    base ,
    
}  
