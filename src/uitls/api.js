import axios from 'axios'
import { Message } from 'element-ui';

axios.interceptors.response.use(success=>{
    if(success.status && success.status ==200){
        if(success.data.status!=200){
            if(success.data.data.message){
                Message.error({message:success.data.data.message});             
            }else{
                Message.error({message:"未知错误，请联系管理员"});
            } 
        }else{
            if(success.data.data.message){
                Message.success({message:success.data.message}); 
            }
        }
        return success.data;
    }
},error=>{
    if(error.response.code&&(error.response.code==504||error.response.code==404)){
        Message.error({message:'服务器被吃了 QAQ'});
    }
    return error.response;
});

export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:url,
        data:params
    });
}
export const getRequest=(url)=>{
    return axios({
        method:'get',
        url:url
    });
}