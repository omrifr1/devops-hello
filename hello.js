const express = require('express');
const app = express();
app.get('/', (r,res) => res.send('<h1>HELLO FROM HELPDESK → DEVOPS</h1>'));
app.listen(3000, () => console.log('3000'));
