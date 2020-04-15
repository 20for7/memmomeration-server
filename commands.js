const express = require('express');
const router = express.Router();
const log = require("./global/console");

var conection = require('./data/database');
var models = require('./model/models');


/*********************************************************** SOLDIERS ***********************************************************/

/****************************************************/
//                set a new soldier                 //
// get data    = > 
//                soldier name
//                soldier mother name
//                soldier image
//                date of death
/****************************************************/
router.post('/set-soldiers', async (req, res) => {
    try {
        log.info("Get action to set a new soldier");

        //update this sodiers data in DB
        var post = new models.soldierModel({
            id: 1,
            soldierName: req.body.soldierName,
            soldierMotherName: req.body.soldierMotherName,
            soldierImage: req.body.soldierImage,
            dateOfDeath: req.body.dateOfDeath
        });

        post.save().then(() => 'soldier saved in database');

        res.send(true);
    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});


/**************************************************/
//                gat all soldiers                //
/**************************************************/
router.get('/get-soldiers', async (req, res) => {
    try {
        log.info("Get action to get all soldiers");

        //get all sodiers data from DB
        models.soldierModel.find({}, (err, data) => {
            if (err) {
                console.log('err from find soldiers');
                console.log(err)
            } else {
                res.send(data)
            }
        });
    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});




/*********************************************************** PSALMS ***********************************************************/

/****************************************************/
//                set a new psalms                 //
// get data    = > 
//                psalms name
//                psalms text
/****************************************************/
router.post('/set-psalms', async (req, res) => {
    try {
        log.info("Get action to set a new psalms");

        //update this psalms data in DB
        var post = new models.psalmsModel({
            id: 1,
            psalmsName: req.body.psalmsName,
            psalmsText: req.body.psalmsText,
        });

        post.save().then(() => 'psalms saved in database');

    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});


/************************************************/
//                gat all psalms                //
/************************************************/
router.get('/get-psalms', async (req, res) => {
    try {
        log.info("Get action to get all psalms");

        //get all psalms data from DB
        models.psalmsModel.find({}, (err, data) => {
            if (err) {
                console.log('err from find soldiers');
                console.log(err)
            } else {
                res.send(data)
            }
        });
    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});






/*********************************************************** ACTION ***********************************************************/

/*******************************************************************************************************/
//                get amount of soldiers that commemorated & num of book that was reading              //
/*******************************************************************************************************/
router.get('/get-num-of-soldiers-that-commemorated&num-of-book-that-was-reading', async (req, res) => {
    try {
        log.info("Get action to get amount of soldiers that commemorated & num of book that was reading");

        //get amount of soldiers that commemorated & num of book that was reading

    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});


/********************************************************/
//                get a soldier & psalms                //
/********************************************************/
router.get('/get-soldier-and-psalms', async (req, res) => {
    try {
        log.info("Get action to get a soldier & psalms");
        let resData = {
            soldier: null,
            psalms: null
        }
        //get the index of the next soldier and the next psalms

        //get the soldier bi index
        await models.soldierModel.find({}, (err, data) => {
            if (err) {
                console.log('err from find soldiers');
                console.log(err)
            } else {
                let i = data;
                resData.soldier = data[3];
            }
        });

        //get the psalms by index

        res.send(resData);
    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});


/************************************************************/
//                update index after reading                //
/************************************************************/
router.get('/update-index-after-reading', async (req, res) => {
    try {
        log.info("Get action to update index after reading");

        //update indexs after reading

    } catch (ex) {
        log.error(ex.message);
        res.status(500).send(ex.message);
    }
});


module.exports.router = router;