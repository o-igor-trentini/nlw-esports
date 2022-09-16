import express from 'express';


const app = express();

app.get('/ads', (_, response) => {
    response.json({ ad: 'teste' });
});

app.listen(4000);
