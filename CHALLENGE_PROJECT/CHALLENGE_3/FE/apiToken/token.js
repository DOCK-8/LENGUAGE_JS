import {URL, EMAIL, PASSWORD, CLIENT_ID, CLIENT_SECRET} from "./config.js"
var refreshToken, token, typeToken;

async function createToken(){
  let data = new FormData();
  data.append("grant_type","password");
  data.append("client_id",CLIENT_ID);
  data.append("client_secret",CLIENT_SECRET);
  data.append("username",EMAIL);
  data.append("password",PASSWORD);
  let optionsCreate = {
    method : 'POST',
    headers : {
      'Accept' : 'application/json'
    },
    body : data, 
    redirect : "follow"
  };
  let datosApi = await fetch(URL+"/oauth/token",optionsCreate)
  .then(respuesta => respuesta.json())
  .catch(error => console.error(`NO SE CONECTO ${error}`));
  refreshToken = datosApi.refresh_token;
  token = datosApi.access_token;
  typeToken = datosApi.token_type;
}

createToken();
