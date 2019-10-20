import { Router }  from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hallo"});
})

export default routes;