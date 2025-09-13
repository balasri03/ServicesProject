import express from 'express'
import SignUpRoute from './routes/SignUp.router.js'
import LoginRoute from './routes/login.route.js'
import FormRoute from './routes/form.route.js'
const app = express()

app.use(express.json())
app.use('/api/v1/signup', SignUpRoute)
app.use('/api/v2/login',LoginRoute)
app.use('/api/v3/form',FormRoute)
export {app}