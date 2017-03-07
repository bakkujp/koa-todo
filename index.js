import 'babel-polyfill'
import Koa from 'koa';
import route from 'koa-route'

var app = new Koa();

// route middleware
app.use(route.get('/', async (ctx, next)  => {
  console.log("list todo");
  ctx.body = 'Hello Koa'
  await next();
}));

// app.use(route.get('/todo/new', add));
// app.use(route.get('/todo/:id', show));
// app.use(route.get('/todo/delete/:id', remove));
// app.use(route.get('/todo/edit/:id', edit));
// app.use(route.post('/todo/create', create));
// app.use(route.post('/todo/update', update));

app.listen(3000);

