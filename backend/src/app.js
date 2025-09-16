import express from 'express'
import cors from 'cors'
import SignUpRoute from './routes/SignUp.router.js'
import LoginRoute from './routes/login.route.js'
import FormRoute from './routes/form.route.js'
import workerRoutes from './routes/workerregister.route.js'
import workerRoutesLogin from './routes/workerlogin.route.js'
import adminRoutes from './routes/admin.route.js'
import customerRoutes from './routes/customerForms.js'
import WorkerAvailability from './routes/workerAvailability.route.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/signup', SignUpRoute)
app.use('/api/v2/login',LoginRoute)
app.use('/api/v3/form',FormRoute)
app.use("/api/workersregister", workerRoutes);
app.use("/api/workerslogin", workerRoutesLogin);
app.use("/api/admin", adminRoutes);
app.use("/customer",customerRoutes)
app.use("/api/workers",WorkerAvailability)
export {app}

