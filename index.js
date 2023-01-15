const express = require('express');
const app = express();

const log4js = require('log4js');
log4js.configure({
  appenders: { app: { type: "file", filename: "logs.log" } },
  categories: { default: { appenders: ["app"], level: "info" } },
});
const logger = log4js.getLogger('app');


app.use((req,res,next)=> {
	logger.info(`[${req.method}]`, req.url, req.query);
	next();
})

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