import { MagnifyingGlassPlus } from 'phosphor-react';
import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export const CreateAd: FC = () => {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong className="text-2xl text-white font-black block">Não econtrou o sue duo?</strong>

                    <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Pulbicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
};
