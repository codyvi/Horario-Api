
function init(){
	let url = '/api/horario';
	let settings = {
		method: 'GET'
	}

	fetch(url, settings)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.listOfVPs').append(`<li>
				${responseJSON[i].nombrelugar} - Periodo JD19: ${responseJSON[i].horario} unidades
										</li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();