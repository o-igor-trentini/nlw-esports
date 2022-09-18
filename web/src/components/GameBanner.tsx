import { FC } from 'react';

export interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    };
}

interface Props {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export const GameBanner: FC<Props> = ({ bannerUrl, title, adsCount }) => {
    return (
        <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={bannerUrl} />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{title}</strong>

                <span className="text-zinc-300 text-sm mt-1">{adsCount} anúncios</span>
            </div>
        </a>
    );
};
