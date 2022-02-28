import { Router } from 'express'
import * as flightsCtrl from "../controller/flight.js"
const router = Router()

// GET userhost:3000/flights
router.get('/', flightsCtrl.index)

// GET userhost:3000/flights/new
router.get('/new', flightsCtrl.new)

// GET userhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

// POST userhost:3000/flights
router.post('/', flightsCtrl.create)

// DELETE userhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)

export {
  router,
}
