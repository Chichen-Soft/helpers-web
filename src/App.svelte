<script>
	import 'bulma/css/bulma.css'
	import { Svelma } from 'svelma'
	import Navbar from './components/Navbar.svelte'
	import Footer from './components/Footer.svelte'
	import Content from './components/Content.svelte'

	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'

</script>

<main>
	<Navbar/>
		<Router {routes} />
	
	<Footer/>

</main>

<style>

</style>