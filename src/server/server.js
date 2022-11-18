import express from 'express';
import ReactDom from 'react-dom/server';
import App from "../shared/App";
import { indexHTML } from "./indexHTML";



const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(
    indexHTML(ReactDom.renderToString(App()))
  )
});

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
})