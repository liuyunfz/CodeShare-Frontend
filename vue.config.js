let proxyObj={}

proxyObj['/save']={
    ws:false,
    target:"http://localhost:8000/",
    changeOrigin:true,
    pathReWrite:{
        "^/save": "/"
    }
}
proxyObj['/code']={
    ws:false,
    target:"http://localhost:8000/",
    changeOrigin:true,
    pathReWrite:{
        "^/code": "/"
    }
}


module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
        // proxy: 'http://localhost:8000'
    }
}