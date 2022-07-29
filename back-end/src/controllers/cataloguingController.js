import express from 'express'
import db from '../services/cataloguingService.js'
import {body, validationResult} from 'express-validator'

const router = express.Router()

router.post('/insertbook',[
    body('title').not().isEmpty().withMessage('Title is required'),
    body('edition').not().isEmpty().withMessage('Edition is required'),
    body('isbn').not().isEmpty().withMessage('ISBN is required'),
    body('year').not().isEmpty().withMessage('Year is required'),
    body('category').not().isEmpty().withMessage('Category is required'),
    body('cdd').not().isEmpty().withMessage('CDD is required'),
    body('idiom').not().isEmpty().withMessage('Idiom is required')
], (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()
        })
    }

    const {title, edition, isbn, year, category, cdd, idiom} = req.body

    try {
        await db.insertBook({title, edition, isbn, year, category, cdd, idiom})
        res.status(200).json({
            message: 'Book inserted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
})

export default router