const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.status(200).send('Running...');
});

app.get('/hello', (req, res)=>{
	if(req?.query?.name) {
		res.status(200).send(`Hello ${req.query.name}`);
	} else {
		res.status(200).send('Hello Stranger');
	}
});

app.get('/author', (req, res)=>{
	res.status(200).send('Mohsen Ziaabadi');
});

app.listen(8080, ()=>{
	console.log('Server started on port 8080');
});