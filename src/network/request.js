import axios from 'axios'
export function request(config) {
        const instence = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //请求拦截
    instence.interceptors.request.use((config) => {
        // console.log(config);
        return config
    }, (err) => {
        // console.log(err);
        
    })
    //响应拦截
    instence.interceptors.response.use((res) => {
        // console.log(res);   
        return res.data    
    }, (err) => {
        console.log(err);
    })
        return instence(config)
            
        
        
}
//第三种方式，newPromise
// export function reqest(config) {
//     return new Promise((resolve,reject) => {
//         const instence = axios.create({
//         baseURL: '',
//         timeout: 1000
//     })
//         instence(config).then((res) => {
//             // console.log(res);
//             resolve(res)            
//         }).catch((err) => {
//             // console.log(err);
//             reject(err)
            
//         })
            
        
//     })

        
// }
//1.第一种方式，传一个config，两个回调函数
// export function reqest(config,success,failure) {
//     const instence = axios.create({
//         baseURL: '',
//         timeout: 1000
//     })
//         instence(config).then((res) => {
//             console.log(res);
//             success(res)            
//         }).catch((err) => {
//             console.log(err);
//             failure(err)
            
//         })
            

        
// }


//2.第二种方式，传一个config，在config里面直接定义基础的url，回调函数
// export function reqest(config) {
//     const instence = axios.create({
//         baseURL: '',
//         timeout: 1000
//     })
//         instence(config.baseURL).then((res) => {
//             console.log(res);
//             config.success(res)            
//         }).catch((err) => {
//             console.log(err);
//             config.failure(err)
            
//         })
            

        
// }