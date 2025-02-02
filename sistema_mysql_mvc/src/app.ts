import express from 'express';
import * as exphbs from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o bodyParser para dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Suporte para PUT/DELETE via query string (se necessário)
app.use(methodOverride('_method'));

// Arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Configurar o Handlebars como template engine com helper para comparação (ifCond)
app.engine('handlebars', exphbs.engine ({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  helpers: {
    ifCond: function (v1: any, v2: any, options: any) {
      return v1 === v2 ? options.fn(this) : options.inverse(this);
    }
  }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas definidas
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});