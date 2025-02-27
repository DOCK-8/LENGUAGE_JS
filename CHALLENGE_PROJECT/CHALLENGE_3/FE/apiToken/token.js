import credential from "./config.json" with {type: "json"};
var refreshToken, token, typeToken;

async function createToken(){
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
  .then(respuesta => respuesta.json())
  .catch(error => console.error(`NO SE CONECTO ${error}`));
  credential.REFRESH_TOKEN = datosApi.refresh_token;
  credential.TOKEN = datosApi.access_token;
  credential.TOKEN_TYPE = datosApi.token_type;
}

await createToken();
console.log(credential);
