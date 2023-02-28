console.log('activo')

//utilizamos el id del boton con el addevenlistener para poder llamar a la funcion creada y asi utlizar el fetch, no le ponemos parentesis a la funcion 
//para que no se llame por si sola, esto haria que el boton no tenga sentido.
  document.querySelector('#boton').addEventListener ('click',traerDatos);

var contenido =document.querySelector ('#contenido')
function traerDatos(){
  fetch ('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log (data.results['0'])
    contenido.innerHTML=`
    <!--aqui copiamos el codigo html, para que fetch sea capaz de traerlo desde el json, todo lo de abajo son tarjetas que van acompañadas de los datos extraidos del Json -->
    <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
    <p style="font-family: 'Roboto', sans-serif;"> Nombre:${data.results['0'].name.first}  </p>
    <h1 class ="text-bg mb-3 "style=" max-width:18rem" ,"font-family: 'Roboto'" id="quiensoy"> ¿quien soy?</h1>
   <section>
    <div> 
    <div class="card text-bg-info mb-3" style="max-width: 18rem;" id="contenido">
    <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nombre Completo</font></font></div>
    <div class="card-body">
    <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].name.first} ${data.results['0'].name.last}</font></font></p>
   </div>
    </section>
   <div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Edad</font></font></div>
        <div class="card-body">
          <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].dob.age}</font></font></p>
        </div>
      </div>
      <section> 
      <div class="card text-bg-info mb-3" style="max-width: 18rem;" id="contenido">
      <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Genero</font></font></div>
      <div class="card-body">
      <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].gender}</font></font></p>
      </section>
      <div class="espacio1"> </div>
      <div>
      <h1 class ="text-bg mb-3" style=" max-width:28rem" ,"font-family: 'Roboto', sans-serif;" id="contratarme">¿como contactarme?</h1>
      <section>
    <div> 
    <div class="card text-bg-info mb-3" style="max-width: 18rem;" id="contenido">
    <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ciudad</font></font></div>
    <div class="card-body">
    <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].location.state}</font></font></p>
   </div>
    </section>
   <div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Numero de celular</font></font></div>
        <div class="card-body">
          <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].phone}</font></font></p>
        </div>
      </div>
      <section> 
      <div class="card text-bg-info mb-3" style="max-width: 18rem;" id="contenido">
      <div class="card-header"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Email</font></font></div>
      <div class="card-body">
      <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${data.results['0'].email}</font></font></p>
      </section>

      </div>
      <div class="youtube-arreglo">
      <h2> tips para contratar al personal </h2>
      <div class="video-youtube" id="tips">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rZxQbe1xLhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>

    `
   
    
  })
}