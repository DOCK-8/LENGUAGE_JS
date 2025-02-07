// API anime's description result
// url : https://rapidapi.com/felixeschmittfes/api/myanimelist
const url = 'https://myanimelist.p.rapidapi.com/anime/top/all?p=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '481a6692a0msh86971563f11aac2p17be55jsn4ae1af6e9106',
		'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
	}
};

// function testAPI() {
// 	return fetch(url, options)
// 	.then(answer => {return answer.json()})
// 	.catch(error => console.error(`ERROR ${error}`));
// }

async function testAPI(){
	try{	
	let ans = await fetch(url, options);
	let json = await ans.json();
	return json;
	}catch (error){
		console.error(`ERROR: ${error}`);
	}
}

export {testAPI};
