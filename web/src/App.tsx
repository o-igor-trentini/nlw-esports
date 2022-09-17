import './styles/main.css';

import logoSvg from './assets/logo-nlw-esports.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export const App = () => {
    return (
        <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
            <img src={logoSvg} alt="Logo do NLW eSports" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu
                <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
                está aqui
            </h1>

            <div className="grid grid-cols-6 gap-6 mt-16">
                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image1.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">League of Legends</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>

                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image2.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Dota 2</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>

                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image3.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">CS:GO</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>

                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image4.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Apex Legends</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>

                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image5.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Fortnite</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>

                <a href="#" className="relative rounded-lg overflow-hidden">
                    <img src="/image6.png" />

                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">WOR</strong>

                        <span className="text-zinc-300 text-sm mt-1">4 anúncios</span>
                    </div>
                </a>
            </div>

            <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
                <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                    <div>
                        <strong className="text-2xl text-white font-black block">Não econtrou o sue duo?</strong>

                        <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
                    </div>

                    <button className="px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
                        <MagnifyingGlassPlus size={24} />
                        Pulbicar anúncio
                    </button>
                </div>
            </div>
        </div>
    );
};
