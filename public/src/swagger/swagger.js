const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Public API',
            version: '1.0.0',
            description: '공공데이터 API 조회',
        },
        host: 'localhost:3000',
        basePath: ''
    },
    apis: ['./src/swagger/*.js', './swagger/swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};