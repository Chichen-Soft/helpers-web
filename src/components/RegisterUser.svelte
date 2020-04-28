<script>
    import { Field, Input } from 'svelma'
    
    let checkboxState = false
    let pw = ""
    let cpw = ""
    let comparison = ""


    function handleCPW(){
        if (pw == cpw){
            comparison = "is-success"
            console.log("Iguales", comparison)
        }else{
            comparison = "is-danger"
            console.log("Diferentes")
        }
    }

</script>

<style>
    :root {
        --desk: 10rem;
        --movile: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .form-width{
            padding-left: var(--movile) !important;
            padding-right: var(--movile) !important;
        }
    }

    @media only screen and (min-width: 1024px) {
        .form-width{
            padding-left: var(--desk) !important;
            padding-right: var(--desk) !important;
        }
    }

    .form-width{
        padding-left: var(--desk);
        padding-right: var(--desk);
    }
</style>


<form>

    <div class="container has-text-centered is-half " >
    
        <h1 class="title" > Registrate </h1>

        <div class="form-width" >
        
            <Field label="Email" >
                <Input placeholder="Tu correo electronico " type="email" />
            </Field>

            <Field label="Nombre" >
                <Input placeholder="Tu nombre " type="name" />
            </Field>

            <Field label="Apellido" >
                <Input placeholder="Tu Apellido " type="name" />
            </Field>

            <Field label="Contrasena" type={comparison} >
                <Input placeholder="Tu contrasena " type="password" bind:value={pw} on:input={handleCPW} class="{comparison}" />
            </Field>
            <Field  >
                <Input  placeholder="Repite tu contrasena" type="password" on:input={handleCPW} bind:value={cpw} class="{comparison}"  />
            </Field>

            <input type="checkbox" bind:checked={checkboxState} >  I agree to the <a href="/">terms and conditions</a>    
            
            <Field>
                <input type="submit" class="button is-primary" value="Registrarte" disabled={!checkboxState} >
            </Field>

            <p style="margin-top: 20px" >  Ya  tienes una cuenta? <a href="/login" > Iniciar sesion  </a> </p>        

        </div>

    </div>

</form>