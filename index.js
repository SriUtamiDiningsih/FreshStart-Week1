const app = require(`express`)();
const port = 8080;



app.listen(
    port, 
    () => console.log(`it's alive on http://localhost:${port}`)
    )

    app.get(`/tshirt`, (req, res) => {
        res.status (200).send({
            tshirt: `tshirt`, 
            size : `large`
        })
    }); 
