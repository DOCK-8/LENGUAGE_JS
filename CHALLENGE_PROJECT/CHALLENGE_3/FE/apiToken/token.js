import configCredential from "./config.json" with {type: "json"};

var credential = configCredential;

async function createToken(){
  console.log("CREAR TOKEN");
  let data = new FormData();
  data.append("grant_type","password");
  data.append("client_id",credential.CLIENT_ID);
  data.append("client_secret",credential.CLIENT_SECRET);
  data.append("username",credential.EMAIL);
  data.append("password",credential.PASSWORD);
  let optionsCreate = {
    method : 'POST',
    headers : {
      'Accept' : 'application/json'
    },
    body : data, 
    redirect : "follow"
  };
  let datosApi = await fetch(credential.URL+"/oauth/token",optionsCreate)
  .catch(error => console.error(`NO SE CONECTO ${error}`));
  datosApi = await datosApi.json();
  credential.REFRESH_TOKEN = datosApi.refresh_token;
  credential.TOKEN = datosApi.access_token;
  credential.TOKEN_TYPE = datosApi.token_type;
  localStorage.setItem("configAPI",JSON.stringify(credential));
}

async function refreshToken(){
  console.log("REFRESCANDO TOKEN");
  let data = new FormData();
  data.append("grant_type","refresh_token");
  data.append("client_id",credential.CLIENT_ID);
  data.append("client_secret",credential.CLIENT_SECRET);
  data.append("refresh_token",credential.REFRESH_TOKEN);

  let optionsRefresh = {
    method : 'POST',
    headers : {
      'Accept' : 'application/json'
    },
    body : data,
    redirect : 'follow'
  };
  let refreshApi = await fetch(credential.URL+"/oauth/token",optionsRefresh)
  .catch(error => console.error(`NO SE CONECTO ${error}`));
  try{
    if(!refreshApi.ok)
      throw new Error("i don't a refresh token!!");
    refreshApi = await refreshApi.json()
    credential.TOKEN_TYPE = refreshApi.token_type;
    credential.TOKEN = refreshApi.access_token;
    credential.REFRESH_TOKEN = refreshApi.refresh_token;
  }catch(e){
    console.error(`STATUS ERROR : ${e}`);
    await createToken();
  }
}

async function cargarConfigAPI(){
  console.log("CREDENTIAL CHARGING");
  if(localStorage.getItem("configAPI") == null)
    await createToken();
  else
    credential = JSON.parse(localStorage.getItem("configAPI"));
}

export {credential , refreshToken, cargarConfigAPI};
