const platform = navigator.appVersion;
let os = null;
if(platform.indexOf('Mac')!=-1){
    os = "mac"
}
if(platform.indexOf('Win')!=-1){
    os = "windows"
}

if(platform.indexOf('Linux')!=-1){

    os = "linux"
}


window.location.href=`./${os}`;