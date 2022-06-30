const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const pesanantiket = [
        {
            "id": "1",
            "image": "https:\/\/s2.rdbuz.com\/buslogos\/country\/IDN\/logo\/18107.png",
            "jam": "11:07:00",
            "harga": "270.000",
            "estimasi": "32",
            "namabis": "Sinar Jaya",
            "tipebis": "Executive Class (2+2)",
            "tujuan": "Terminal Bungurasih - Terminal Kampung Rambutan"
        }
    ];
    // res.send("Hello Quotes!");
    res.status(200).json(pesanantiket[0]);

});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});