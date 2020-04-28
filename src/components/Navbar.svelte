<script>
let type = 'is-primary'
let visibility = 'none'
    
async function update(){
    type = ''
    setTimeout(() => {
        type = types[Math.floor(Math.random() * types.length )]
    }, 1000)
}

function showNavbar(){
    if (visibility == 'none'){
        visibility = 'is-active';
        console.log("Mostrar Navbar")
        console.log(visibility)
    }else if (visibility == 'is-active') {
        visibility = 'none';
        console.log("esconder navbar")
        console.log(visibility)
    }
}

</script>

<style>

    .color{
        background-color: #FFE0E0;
    }

    .secundario{
        background-color: #D1C1E8;
        color: white;

    }

    .terciario{
        background-color: #D6F2FF;
        color: white;
    }

    .rounded{
        border: none;
        border-radius: 10px;
        padding: 10px
    }



</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Brand Logo" >
    </a>

    <a role="button" class="navbar-burger burger {visibility} " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" on:click={showNavbar} >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu {visibility}"  >
    <div class="navbar-start">

      <input placeholder="Como podemos ayudate hoy?" class="navbar-item" style="margin: 10px; width: 95%" >

      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item">
        Quienes somos?
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <hr class="navbar-divider">

        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/chooseRegister" >
            <strong>Registrarte</strong>
          </a>
          <a class="button is-light" href="/chooseLogin" >
            Iniciar sesion
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>