import express from 'express'
import {SetValue} from "../controllers/value.controller.js"

const router =express.Router();

router.post('/setValue',SetValue);


export default router;