const express = require('express');
const helmet = require('helmet');

//routes import - nothing for now
//const actionRoutes = require('../routes/action-router');
//const projectRoutes = require('../routes/project-router');

const server = express();
server.use(helmet());
server.use(express.json());

//server.use(routes)
//server.use('/api/actions', actionRoutes);
//server.use('/api/projects', projectRoutes);

module.exports = server;
