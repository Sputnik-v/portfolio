export const indexHTML = (content) => `
    <!DOCTYPE html>
        <html lang="en" >
        <head >
            <meta charset="UTF-8" >
            <title >Reddit</title >
            <script src="/static/client.js" type="application/javascript"></script>
        </head >
        <body >
            <div id="root">${content}</div>
        </body >
        </html >
    `
;