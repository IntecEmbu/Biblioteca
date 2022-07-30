import express from "express"
import cataloguingController from './controllers/cataloguingController.js'

const router = express.Router()


router.use('/cataloguin', cataloguingController)

router.use('/*', (req, res) => {
    res.status(404).json({
        error: 'Not found, verify on github',
        by: '@blibion'
    })
})

export default router