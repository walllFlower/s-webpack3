import qs from 'qs';
import { bindURL, validateStatus, mergeObj, isObject, isURLSearchParams } from './utils';
import { merge } from 'rxjs';

class Bridge {

    request = (config) => {
        return new Promise(function dispatchXhrRequest(resolve, reject){
            const xhr = new XMLHttpRequest();
            const loadEvent = 'onreadystatechange';

            if(config.auth){
                //add to do 
            }

            
            xhr.open(config.method.toUpperCase(), bindURL(config.url, config.params), true);
            
            //open之后才能调用setRequestHeader
            if(['POST','PUT','PATCH'].includes(config.method.toUpperCase()) && config.data !== undefined){
                if(isObject(config.data)) 
                    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8');
                else
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8')
            }

            xhr[loadEvent] = function loadCallback(){
                if(!xhr || xhr.status !== 4 ) return;

                // parse headers
                let responseData = xhr.response;
                let response = {
                    data: responseData,
                    status: xhr.status,
                    statusText: xhr.statusText,
                    config: config
                }
                if(validateStatus(response.status)){
                    resolve(response)
                } else{
                    reject('Request failed with status code ' + response.status);
                }
            }

            let data = config.data === undefined ? null : config.data;
            xhr.send(data);
        })
    }
    get = (url, config) => {
        return this.request(mergeObj(config || {} , { 
            method: 'get',
            url
        }));
    }

    post = (url, data, config) => {
        return this.request(mergeObj(config || {} , { 
            method: 'post' ,
            url,
            data
        }));
    }
}

export default new Bridge();
