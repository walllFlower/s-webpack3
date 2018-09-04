import qs from 'qs';
import { merge } from 'rxjs';

/**
 * url和params合并，序列化
 * @param {*} url 
 * @param {*} params 
 */
export function bindURL(url, params){
    if(!params) return url;

    let serializedParams = qs.stringify(params);

    if(url.indexOf('?') === -1) url = url + '?';
    url = url + serializedParams;
    return url;
}

/**
 * 检验请求返回码
 * @param {*} status 
 */
export function validateStatus(status){
    return status >= 200 && status < 300; 
}

/**
 * 合并多个对象（深拷贝）
 *
 * @export
 * @returns
 */
export function mergeObj(/*obj1, obj2, obj3 ...*/){
    let result = {};
    let args = arguments.length > 0 ? arguments : [];

    function deepCopy(target,src){
        for(let key in src){
            if(typeof src[key] === 'object') {
                target[key] = target[key] || {};
                deepCopy(target[key],src[key]);
            }
            target[key] = src[key];
        }
    }

    for(let arg of args){
        deepCopy(result, arg);
    }
    return result;
}

/**
 * 验证字符串
 *
 * @export
 * @param {*} val
 * @returns
 */
export function isURLSearchParams(val){
    return val !== null && Object.prototype.toString.call(val) === '[object String]'; 
}

export function isObject(val){
    return val !== null && Object.prototype.toString.call(val) == '[object String]';
}

