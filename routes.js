'use strict'

var express = require('express');

var about = require('../about/about.route');
var address = require('../address/address.route');
var award = require('../award/award.route');
var blog = require('../blog/blog.route');
var education = require('../education/education.route');
var experience = require('../experience/experience.route');
var expertise = require('../expertise/expertise.route');
var portfolio = require('../portfolio/portfolio.route');
var role = require('../role/role.route');
var skill = require('../skill/skill.route');
var user = require('../user/user.route');

const router = express.Router();

router.use('/about', about);
router.use('/address', address);
router.use('/award', award);
router.use('/blog', blog);
router.use('/education', education);
router.use('/experience', experience);
router.use('/expertise', expertise);
router.use('/portfolio', portfolio);
router.use('/role', role);
router.use('/skill', skill);
router.use('/user', user);

module.exports = router;
