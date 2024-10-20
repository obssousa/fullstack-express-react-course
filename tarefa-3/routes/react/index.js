import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basePath = path.join(__dirname, '../../templates');

router.get('/', (req, res, next) => {
    res.status(200).sendFile(`${basePath}/react-view.html`)
});

export default router;