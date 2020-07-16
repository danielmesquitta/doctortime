const { Router } = require('express')
const multer = require('multer')

const multerConfig = require('./config/multer')
const authMiddleware = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const FileController = require('./app/controllers/FileController')
const ProviderController = require('./app/controllers/ProviderController')
const AppointmentController = require('./app/controllers/AppointmentController')
const ScheduleController = require('./app/controllers/ScheduleController')

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)
routes.put('/users', UserController.update)

routes.get('/providers', ProviderController.index)

routes.post('/appointments', AppointmentController.store)
routes.get('/appointments', AppointmentController.index)

routes.get('/schedule', ScheduleController.index)

routes.post('/files', upload.single('file'), FileController.store)

module.exports = routes
