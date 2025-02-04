import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
        id: 1,
        title: 'Curso Vue.js',
        price: 'R$ 600',
    },
    {
        id: 2,
        title: 'Curso React',
        price: 'R$ 400',
    },
    {
        id: 3,
        title: 'Curso Svelte',
        price: 'R$ 450',
    }
]

app.get('/', (req, res) => {
    res.render('home', { products })
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((product) => product.id == productId)
    res.render('product', { product })
});

app.listen(3000);