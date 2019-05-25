const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// base route returns all of the images without associated tags
router.get('/', (req, res) => {
    const dbQuery = `SELECT * FROM "images";`;

    pool.query(dbQuery)
        .then((response) => {
            console.log('get images: ', response);
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error getting images: ', err);
        })
});

router.get('/withtags', (req, res) => {
    const dbQuery = `SELECT * FROM "images"
                    JOIN "junc_images_tags" ON "images"."id"="junc_images_tags"."image_id"
                    JOIN "tags" ON "junc_images_tags"."tag_id"="tags"."id";`;

    pool.query(dbQuery)
        .then((response) => {
            console.log('get images: ', response);
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error getting images: ', err);
            res.sendStatus(500);
        })
});

// Make a relationship between an image and a tag using the junction table.
router.post('/addtag', (req, res) => {
    const saveData = req.body;
    const dbQuery = `INSERT INTO "junc_images_tags" ("image_id", "tag_id")
                    VALUES $1, $2;`;

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

router.delete('/', (req, res) => {
    
});

module.exports = router;