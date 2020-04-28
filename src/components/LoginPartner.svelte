<script>
    import { Field, Input } from 'svelma'    
</script>

<div class="container" >
    <section class="section has-text-centered " >
        <form>
            <h1 class="title" > Iniciar sesion </h1>
            <Field label="Email" >
                <input placeholder="Tu correo electronico " type="email" >
            </Field>
            <Field label="Contrasena"  >
                <input placeholder="Tu contrasena " type="password" >
            </Field>
            <button class="button is-primary" > Iniciar sesion </button>
        </form>
        <p style="margin-top: 20px" >  Aun no tienes una cuenta? <a href="/register" > Registrate  </a> </p>
    </section>
</div>