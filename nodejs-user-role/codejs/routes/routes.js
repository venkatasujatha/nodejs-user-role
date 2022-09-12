const user = require('/home/tectoro/Desktop/codejs/controller/users.js');
const role = require('/home/tectoro/Desktop/codejs/controller/roles.js');
const router = require('express').Router();

router.get('/findbyid',user.findUser);
router.get('/find',user.findall);
router.post('/adduser',user.add);

router.post('/addrole',role.addrole);
router.get('/find',role.findall);

module.exports = router;

