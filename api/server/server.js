const express = require('express');
const helmet = require('helmet');

//routes import - nothing for now
const projectRoutes = require('../routes/project-router');
//const actionRoutes = require('../routes/action-router');

const server = express();
server.use(helmet());
server.use(express.json());

//server.use(routes)
server.use('/api/projects', projectRoutes);
//server.use('/api/actions', actionRoutes);

module.exports = server;
