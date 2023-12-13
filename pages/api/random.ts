import serverAuth from "@/lib/serverAuth";
import prismadb from '@/lib/prismadb'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req);

        const mCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * mCount);

        const randomMovie = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return res.status(200).json(randomMovie[0]);
    } catch (e) {
        console.log(e);
        return res.status(400).end();
    }
}