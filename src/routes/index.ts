import { Express } from 'express';

const routes = {
    'health': import('./health'),
}

const setupRoutes = async (app: Express) => {
    for await (const [path, route] of Object.entries(routes)) {
        const { setupRoute } = await route;
        setupRoute(app);
        console.log(`Route ${path} has been set up.`);
    }
}

export { setupRoutes };
