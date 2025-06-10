import { Express } from "express";

export const setupRoute = (router: Express) => {
    router.get('/health', (req, res) => {
        res.status(200).json({ status: 'OK' });
    });
}
