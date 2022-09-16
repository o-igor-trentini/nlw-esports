import './styles/main.css';

import logoSvg from './assets/logo-nlw-esports.svg';

export const App = () => {
    return (
        <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
            <img src={logoSvg} alt="Logo do NLW eSports" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu
                <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
                está aqui
            </h1>
        </div>
    );
};
