
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { Op } = require('sequelize');

const db = require('./db/connection');
const Job = require('./models/Job');

const app = express();

// handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
const jobsRouter = require('./routes/jobs');
app.use('/jobs', jobsRouter);

// home
app.get('/', (req, res) => {

    let query = req.query.job;

    if (typeof query === 'string' && query.trim() !== '') {

        query = query.trim();

        // search
        Job.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${query}%` } },
                    { company: { [Op.like]: `%${query}%` } },
                    { description: { [Op.like]: `%${query}%` } }
                ]
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(jobs => {

            res.render('home', {
                jobs: jobs.map(job => job.toJSON()),
                search: query
            });

        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Erro ao buscar vagas.');
        });

    } else {

        // all jobs
        Job.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then(jobs => {

            res.render('home', {
                jobs: jobs.map(job => job.toJSON()),
                search: ''
            });

        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Erro ao carregar vagas.');
        });

    }

});

// add
app.get('/add', (req, res) => {
    res.render('add');
});

// database
db.authenticate()
.then(() => {
    console.log('Database connected!');

    return db.sync();
})
.then(() => {
    console.log('Tables created!');

    // server
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
})
.catch(error => {
    console.log('Database error:', error);
});
