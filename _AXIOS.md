### Axios源码阅读

> adapters 两种方式发送请求
- Node http
- XMLHttpRequest

> core
- Axios: Axios构造函数 request[get、post、put、delete、patch、head、option]
  - request：按照interceptors request、dispatch request、interceptors response的顺序，放进promise依次执行
- dispatchRequest：处理请求的headers、data，然后调用adapter发起请求，返回promise
- transformData：获取到返回的数据data之后，调用transformResponse处理data

> createInstance

> utils

> InterceptorManager

> dispatchRequest