import express from 'express';
import morgan from 'morgan';
const PORT = 4000;

const app = express();
// app을 express로
const logger = morgan(`dev`);
//margan을 통해 logger라는 middlewear 만들기
const home = (req, res) => {
  return res.send(`cd d `);
};

app.use(logger);
//middlewear를 logger로
app.get(`/`, home);
// /로 request가 오면 middlewear를 거쳐 home 실행
const handleListening = () =>
  console.log(`✅ Server is listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// 4000 포트로 오는 request 감지해 handleListening 실행
