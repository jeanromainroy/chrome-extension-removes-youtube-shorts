<script>
</script>


<main>
    <div class="container">

        <p class="title">Youtube Shorts</p>
        <p class="subsubtitle">Removes the "shorts"</p>
        <br>

    </div>
</main>


<style>

    :global(:root) {
        --black-dark: #222;
        --black: #444;
        --red: #e44e4e;
        --main-color: hsl(219, 42%, 41%);
        --font-size-very-very-very-small: 0.7em;
        --font-size-very-very-small: 0.8em;
        --font-size-very-small: 0.9em;
        --font-size-small: 1.05em;
        --font-size-normal: 1.3em;
        --font-size-large: 1.8em;
        --font-size-very-large: 2em;
        --font-bold: 600;
        --font-normal: 400;
        --max-width: 500px;
        --max-width-small: 400px;
    }

    main {
        width: var(--max-width);
        overflow-y: scroll;
        background-color: white;
        margin: 0px;
        padding: 8px;
    }
    

    .container {
        margin: 0px;
        padding: 16px;
        border: 1px solid var(--black);
        background-color: white;
        min-height: 200px;
    }

    p {
        padding: 0px;
    }

    :global(.title) {
        text-align: left;
        color: var(--black-dark);
        margin: 1.0em auto 0.25em;
        font-weight: var(--font-bold);
        font-size: var(--font-size-large);
        max-width: var(--max-width);
    }

    :global(.subtitle) {
        text-align: left;
        color: var(--black-dark);
        margin: 0.75em auto 0.5em;
        font-weight: var(--font-bold);
        font-size: var(--font-size-normal);
        max-width: var(--max-width);
    }

    :global(.subsubtitle) {
        text-align: left;
        color: var(--black-dark);
        margin: 1.0em auto -0.5em;
        font-weight: var(--font-bold);
        font-size: var(--font-size-small);
        max-width: var(--max-width);
    }

    :global(.subsubsubtitle) {
        text-align: left;
        color: var(--black-dark);
        margin: 1.0em auto -0.75em;
        padding: 0px;
        font-weight: var(--font-bold);
        font-size: var(--font-size-very-small);
        max-width: var(--max-width);
    }

    :global(.text) {
        text-align: left;
        color: var(--black);
        margin: 0 auto;
        padding: 0px;
        font-weight: var(--font-normal);
        font-size: var(--font-size-very-small);
        max-width: var(--max-width);
    }

</style>