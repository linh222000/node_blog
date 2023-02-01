const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../unti/mongooses');
class SiteController {
    // [GET] /
    index(req, res, next) {
        // cách viết với promise
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /news:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;