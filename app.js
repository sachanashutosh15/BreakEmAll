import express from 'express';
const app = express();

app.use(express.static('public'));
app.use(express.static('src'));

app.get('/', function(req, res) {
	res.sendFile('public/index.html');
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
