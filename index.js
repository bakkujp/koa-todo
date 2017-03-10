import 'babel-polyfill'
import Koa from 'koa';
import route from 'koa-route'

var app = new Koa();

const list = async (ctx, next) => {
  console.log("list todo");
  ctx.body = 'List todos';
  ctx.status = 201;
};

var add = async (ctx)  => {
  console.log("add a todo");
  ctx.body = 'Add a todo';
  await next();
};

var show = async (ctx, next)  => {
  console.log("show a todo");
  ctx.body = 'Show a todo';
  await next();
};

var del = async (ctx, next)  => {
  console.log("delete a todo");
  ctx.body = 'Delete a todo';
  await next();
};

// route middleware
app.use(route.get('/', list));
app.use(route.get('/todo/new', add));
app.use(route.get('/todo/:id', show));
app.use(route.del('/todo/:id', del))
// app.use(route.get('/todo/delete/:id', remove));

app.listen(3000);