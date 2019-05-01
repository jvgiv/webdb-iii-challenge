const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/challenge.sqlite3'
    },
    useNullAsDefault: true
}

const db = require('./data/dbConfig')

const server = express();

server.use(helmet())
server.use(express.json())


server.post('/api/cohorts', async (req, res) => {
    try{
        const [id] = await db('cohorts').insert(req.body)

        const cohort = await db('cohorts')
            .where({ id })
            .first()
        res.status(201).json(cohort)
    } catch (error) {
        res.status(500).json(error)
    }
})

server.get('/api/cohorts', async (req, res) => {
    try {
        const cohorts = await db('cohorts');
        res.status(200).json(cohorts);
    } catch (error) {
        res.status(500).json(error)
    }
})

server.get('/api/cohorts/:id', async (req, res) => {
    try{
        const cohorts = await db('cohorts')
            .where({ id: req.params.id })
            .first();
        res.status(200).json(cohorts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// server.get('/api/cohorts/:id/students')

server.put('/api/cohorts/:id', async (req, res) => {
    try {
        const update = await db('cohorts')
            .where({ id: req.params.id })
            .update(req.body)

        if (update > 0) {
            const cohorts = await db('cohorts')
                .where({ id: req.params.id })
                .first()

        res.status(200).json(cohorts)
        }
    } catch (error) {
        res.status(404).json({ message: 'Cohort not found.' })
    }
})

// server.delete('/api/cohorts/:id')










const port = process.env.PORT || 42069;
server.listen(port, () => 
    console.log(`\n *** API Running on http://localhost:${port}`)
);