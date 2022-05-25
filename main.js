descargarUsuarios(3);

function descargarUsuarios(cantidad) {
	const api = `https://api.randomuser.me/?nat=es&results=${cantidad}`;
	fetch(api)
		.then(function (respuesta) {
			return respuesta.json();
		})
		.then(function (datos) {
			generarHtml(datos.results);
		})
		.catch(function (error) {
			console.log(`Error: ${error.message}`);
		});
}

function generarHtml(datos) {
	datos.forEach(function (usuario) {
		console.log(usuario);
		const item       = document.createElement("div");
		const obj        = {};
		obj.nombre       = usuario.name.first;
		obj.apellido     = usuario.name.last;
		obj.imagen       = usuario.picture.large;
		obj.nacionalidad = usuario.nat;
		item.innerHTML   = `<div class="card col-sm-2 item">
                                <div class="card-body">
                                    <h4 class="card-title">${obj.nombre} ${obj.apellido}</h4>
                                                              
                                </div>
                                <img src="${obj.imagen}" class=" imagen" alt="..."></img>
                            </div>
							<div class="card col-sm-2 item">
								<p class="texto-card" >Desarrollador</p>
							</div>`;
	
		document.querySelector(".container").appendChild(item);
	});
}
