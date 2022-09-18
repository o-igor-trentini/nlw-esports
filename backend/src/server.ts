import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import { convertHourStringToMinutes } from './utils/convertHourStringToMinutes';
import { convertMinutesToHourString } from './utils/convertMinutesToHourString';

const app = express();

app.use(express.json());
app.use(cors({}));

const prisma = new PrismaClient({ log: ['query'] });

app.get('/games', async (_, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                },
            },
        },
    });

    response.json(games);
});

app.post('/ads/:gameId', async (request, response) => {
    const gameId = request.params.gameId;
    const body = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            discord: body.discord,
            useVoiceChannel: body.useVoiceChannel,
        },
    });

    response.status(201).json(ad);
});

app.get('/game/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            hourStart: true,
            hourEnd: true,
            yearsPlaying: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    response.json(
        ads.map((item) => ({
            ...item,
            weekDays: item.weekDays.split(','),
            hourStart: convertMinutesToHourString(item.hourStart),
            hourEnd: convertMinutesToHourString(item.hourEnd),
        })),
    );
});

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        },
    });

    return response.json({ discord: ad.discord });
});

app.listen(4000);
