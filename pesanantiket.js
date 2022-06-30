const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const pesanantiket = [
        "Cok",
        "Kontol",
    ];
    // res.send("Hello Quotes!");
    const randNumber = Math.floor(Math.random() * pesanantiket.length - 1);

    res.status(200).json(pesanantiket[randNumber]);

});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});