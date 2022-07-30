import express from "express"
import cataloguingController from './controllers/cataloguingController.js'

const router = express.Router()

router.use('/*', (req, res) => {
    res.status(404).json({
        error: 'Not found'
    })
})

router.use('/cataloguin', cataloguingController)

export default router