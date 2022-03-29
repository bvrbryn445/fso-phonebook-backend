const express = require('express');
const app = express();

const persons = [
	{
		"id": 1,
		"name": "Arto Hellas",
		"number": "040-123456"
	},
	{
		"id": 2,
		"name": "Ada Lovelace",
		"number": "39-44-5323523"
	},
	{
		"id": 3,
		"name": "Dan Abramov",
		"number": "12-43-234345"
	},
	{
		"id": 4,
		"name": "Mary Poppendieck",
		"number": "39-23-6423122"
	}
];

app.get('/api/persons', (req, res) => {
	res.json(persons);
});

//display the total person from the phonebook and the date
app.get('/info', (req, res) => {
	const str = `<p>Phonebook has info for ${persons.length} people<p> 
	<p>${new Date()}</p>`;
	res.send(str);
})

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})