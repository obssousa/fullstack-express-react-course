import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import vueRoutes from './routes/vue/index.js';
import reactRoutes from './routes/react/index.js';

const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const basePath = path.join(__dirname, './templates');

app.use(express.static('public'));

app.use('/vue', vueRoutes);

app.use('/react', reactRoutes);

app.get('/', (req, res, next) => {
    res.status(200).sendFile(`${basePath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404-view.html`)
});

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})