<script>

    // import config
    import { APP_NAME } from './config.js';

</script>


<main>
    <div class="container">
        <p class="title">{APP_NAME}</p>
        <br>
        <div style="text-align: center; margin: 0px auto;">
            <img alt="preview" src="assets/preview.png" width="200px" height="auto">
        </div>
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

    .title {
        text-align: left;
        color: var(--black-dark);
        margin: 0px;
        font-weight: var(--font-bold);
        font-size: var(--font-size-large);
        max-width: var(--max-width);
    }

    img {
        border: 1px solid black;
        padding: 8px;
    }

</style>