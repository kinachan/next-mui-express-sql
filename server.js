import express from 'express';
import next from 'next';
import router from './src/server/router';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import csurf from 'csurf';

const RedisStore = connectRedis(session);
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());
    server.use(session({
      resave: true,
      saveUninitialized: false,
      store: new RedisStore({
        host: 'localhost',
        port: 6379
      }),
      secret: 'secret',
    }));
    server.use(csurf({ cookie: true }));
    server.use('/api', bodyParser.json());

    server.use('/api', router);
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(24424, (err) => {
      if (err) throw err;
      console.log('リアルポンキッキ、はーじまーるよー！');
      console.log('> Ready on http://localhost:24424')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })