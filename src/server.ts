import app from './app/http/app';

app.listen(process.env.NODE_PORT, () => {
  console.log(
    `🤘 Server started on port ${process.env.NODE_PORT}, and '${process.env.NODE_ENV}' environment!`,
  );
});
