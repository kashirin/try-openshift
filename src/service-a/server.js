let express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.end('I am service-a!')
});

app.get('/service-a/foo', (req, res) => {
	res.end('bar from service a!')
});

app.listen(3001, ()=>{
	console.log('Listening on 3001');
});