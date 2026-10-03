import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/:from/:to', (req, res) => {
    const { from, to } = req.params;
    const filePath = path.join(__dirname, '../data/flightData.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Unable to read flight data'
            });
        }
        const flights = JSON.parse(data);
        const matchingFlights = flights.filter((flight) => flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
        );
        res.json(matchingFlights);
    });
});
export default router;