export const root = (child) => {
    return(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://unpkg.com/htmx.org@1.6.1"></script>
            <title>HTMX with Node.js</title>
        </head>
        <body>
            ${child}
        </body>
        </html>`
    );
};