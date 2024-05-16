const router = require('express').Router()
const { param } = require('express-validator')
const mongoose = require('mongoose');
const OpportunityController = require('../controllers/Opportunity')



router.post(
    '/create/:clientId',
    param('clientId').custom(value => {

        if (!mongoose.Types.ObjectId.isValid(value)) {
            return Promise.reject('invalid id')
        } else return Promise.resolve()
    }), OpportunityController.create
);

router.get(
    '/:clientId',
    param('clientId').custom(value => {

        if (!mongoose.Types.ObjectId.isValid(value)) {
            return Promise.reject('invalid id')
        } else return Promise.resolve()
    }), OpportunityController.getByClientId
);
router.put('/update/:opportunityId',OpportunityController.update);
router.delete('/delete/:opportunityId',OpportunityController.delete);


module.exports = router
