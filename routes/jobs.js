
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// test
router.get('/test', (req, res) => {
    res.send('Jobs route is working!');
});

// add job
router.post('/add', async (req, res) => {
    try {
        const {
            title,
            description,
            salary,
            company,
            email,
            new_job
        } = req.body;

        // validation
        if (
            !title?.trim() ||
            !description?.trim() ||
            !salary?.trim() ||
            !company?.trim() ||
            !email?.trim() ||
            !['0', '1'].includes(new_job)
        ) {
            return res.status(400).send('Preencha todos os campos.');
        }

        // insert
        await Job.create({
            title: title.trim(),
            description: description.trim(),
            salary: salary.trim(),
            company: company.trim(),
            email: email.trim(),
            new_job: Number(new_job)
        });

        res.redirect('/');

    } catch (error) {
        console.log('Erro ao cadastrar vaga:', error);
        res.status(500).send('Erro ao cadastrar a vaga.');
    }
});

// delete job
router.post('/delete/:id', async (req, res) => {
    try {
        await Job.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/');

    } catch (error) {
        console.log('Erro ao excluir vaga:', error);
        res.status(500).send('Erro ao excluir vaga.');
    }
});

// job individual
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);

        if (!job) {
            return res.status(404).send('Vaga não encontrada.');
        }

        res.render('job', {
            job: job.toJSON()
        });

    } catch (error) {
        console.log('Erro ao buscar vaga:', error);
        res.status(500).send('Erro ao carregar vaga.');
    }
});

module.exports = router;
