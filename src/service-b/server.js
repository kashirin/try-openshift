let express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.end('And I am service-b!')
});

app.get('/service-b/foo', (req, res) => {
	res.end('bar from service b!')
});

app.listen(3002, ()=>{
	console.log('Listening on 3002');
});