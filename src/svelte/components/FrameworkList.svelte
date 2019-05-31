<script>
    const frameworks = [
        {
            id: 1,
            name: 'Svetle'
        },
        {
            id: 2,
            name: 'Vue'
        },
        {
            id: 3,
            name: 'React'
        },
        {
            id: 4,
            name: 'Angular'
        }
    ]
</script>

<h2>Framework list</h2>
{#each frameworks as {id, name}}
<ul>
    <li>{id}: {name}</li>
</ul>
{/each}