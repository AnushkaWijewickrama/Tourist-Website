import * as express from 'express';
export const router = express.Router();

router.use('/', (req, res) => {
    const datTime = Date.now();
    const data: any = {
        message: 'Hello World from API Router',
        success: true,
        datTime
    };
    res.send(data);
});