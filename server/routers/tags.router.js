const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const dbQuery = `SELECT * FROM "tags";`;

    pool.query(dbQuery)
        .then((response) => {
            console.log('get images: ', response);
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error getting images: ', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const saveData = req.body;
    const dbQuery = `INSERT INTO "tags" ("name")
                    VALUES $1;`;

    pool.query(dbQuery, [saveData.imageId, saveData.tagId])
        .then((response) => {
            console.log('post tag to image: ', response);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error posting to: ', err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});

module.exports = router;