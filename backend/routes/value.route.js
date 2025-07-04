import express from 'express'
import {SetValue,GetValue} from "../controllers/value.controller.js"

const router =express.Router();

router.post('/setValue',SetValue);
router.get('/getValue',GetValue)

export default router;