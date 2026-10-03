import express from 'express';
import flightRoutes from './routes/flightRoutes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Flight API is running');
});


app.use('/flights', flightRoutes);

export default app;