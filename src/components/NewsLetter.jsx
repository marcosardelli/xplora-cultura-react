export default function NewsLetter(){


    const [isSubscribed, setSubscribed] = useState(0) // ref de Vue


    function subscribe(e){
        e.preventDefault();
            // Read the form data
        const form = e.target;
        const formData = new FormData(form);


        // Cambiar el estado a suscrito
        isSubscribed = true;
        
        // Limpiar el campo de correo electrónico después de suscribirse
        email.value = '';

        // You can pass formData as a fetch body directly:
        fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

    }

    return (


        <>
            <section id="formulario" class="container my-5 text-center" aria-labelledby="newsletter-title">
      {/* Mostrar form de suscripcion */}
      <div v-if="!isSubscribed">
        <h4 id="newsletter-title">Conoce todos los eventos antes que nadie con nuestra newsletter</h4>
  
        <form class="d-flex justify-content-center mt-3" onSubmit={e => subscribe(e)}>
          <input
            v-model="email"
            type="email"
            class="form-control w-50"
            placeholder="Correo electrónico"
            required
            aria-label="Correo electrónico"
          />
          <button type="submit" class="btn btn-danger ms-2">Suscribirse 🤍</button>
        </form>
      </div>
  
      {/* Mostrar mensaje acceptance si esta suscrito */}
      <div v-else id="acceptForm" class="container d-flex justify-content-center align-items-center">
        <div class="text-center">
          <div class="alert alert-secondary" role="alert">
            <h4 class="alert-heading">Gracias por suscribirte a nuestra newsletter.</h4>
            <p>
              A partir de ahora, estarás al tanto de todas nuestras novedades,
              eventos y contenido exclusivo. ¡Estamos emocionados de que te unas a nuestra comunidad!
              Recibirás un correo electrónico con las últimas actualizaciones directamente en tu bandeja de
              entrada. No olvides revisar nuestras redes sociales para estar aún más conectado.
              Si tienes alguna pregunta o inquietud, no dudes en contactarnos. ¡Te damos la bienvenida a nuestra
              familia!
            </p>
            <hr />
            {/* Redirigir de vuelta a la página de suscripción cuando el usuario haga clic en 'Cerrar' */}
          <button v-on:click="resetAndGoBack" class="btn btn-danger">🤍 Me encanta!</button>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}