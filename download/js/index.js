const agent = navigator.userAgent;

let os = null;
if(agent.indexOf('iPhone')!=-1){
     os = "ios"
    
}
else if(agent.indexOf('Android')!=-1){
    os ="android"
}
else if(agent.indexOf('Mac OS')!=-1){
  os = "mac"  
}
else if(agent.indexOf('Win')!=-1){
    os = "windows"
}
else if(agent.indexOf('Linux')!=-1){
    os = "linux"
}

// Redirect the user to a os directory based on their machine
window.location.href=`./${os}`;