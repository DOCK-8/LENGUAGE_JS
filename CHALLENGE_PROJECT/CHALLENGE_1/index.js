const OPTIONS= {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '481a6692a0msh86971563f11aac2p17be55jsn4ae1af6e9106',
		'x-rapidapi-host': 'ip-lookup-threat-detection-api.p.rapidapi.com'
	}
};
const fetchIP = ip => {
	let url = `https://ip-lookup-threat-detection-api.p.rapidapi.com/${ip}`;
  return fetch(url,OPTIONS)
  .then(respuesta => respuesta.json())
  .catch(error => console.error(`ERROR : ${error}`));
}
let formulario = document.getElementById("ip-form");
formulario.addEventListener('submit', async (event) => {
	event.preventDefault();
	let ipInput = formulario.firstElementChild.value
	if(!ipInput) return;
	let ipInformacion = await fetchIP(ipInput);
	document.getElementById("ip-result").innerHTML = JSON.stringify(ipInformacion,null,1);
});
