<script>

    let response = ""
    let promise = getList();

    async function getList(){
        const res = await fetch("http://localhost:3000")
        const json = await res.json()
        response = json
        console.log(response)

    if(res.ok){
        return json
    }else{
        throw new Error(text);
     }
    }

    function handleList(){
        promise = getList()
    }


</script>

<style>

    .services-item{
        display: flex;
        justify-content: space-between;
    }

</style>

<div class="container column" >


    {#await promise}
	    <p>...waiting</p>
    {:then number}
	    
        {#each response as { user, price, requestedAt, serviceRequested} }
            <div class="box  "  >   
                <div class="services-item" > <p> {user} </p> <p> $ {price} </p>  </div>
                <div class="services-item" > <p> {requestedAt} </p> <p> {serviceRequested} </p>  </div>

            </div>
        {/each }

    {:catch error}
	    <p style="color: red">{error.message}</p>
    {/await}

</div>