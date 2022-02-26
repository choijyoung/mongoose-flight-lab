import { Router } from 'express'
import * as flightsCtrl from "../controller/flight.js"
const router = Router()

// GET userhost:3000/flights
router.get('/', flightsCtrl.index)

// GET userhost:3000/flights/new
router.get('/new', flightsCtrl.new)

// POST userhost:3000/flights
router.post('/', flightsCtrl.create)

export {
  router,
}
