<script>
    import FrameworkList from './components/FrameworkList.svelte';
    const name = 'Simba';
    let nameSecond = 'Cat'
    const user = {
        loggedIn: false
    }

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }
</script>

<style>
h2 {
    color: blueviolet;
}
</style>

<h2>{name}</h2>
<input type="text" bind:value={nameSecond}>
<p>{nameSecond}</p>
{#if user.loggedIn}
    <button on:click={toggle}>Log out</button>
{:else}
    <button on:click={toggle}>Log in</button>
{/if}
<FrameworkList />