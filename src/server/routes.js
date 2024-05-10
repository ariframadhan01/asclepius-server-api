const { handlePrediction, handlePredictHistories } = require('./handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: handlePrediction,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1000000
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: handlePredictHistories
    }
];

module.exports = routes;
