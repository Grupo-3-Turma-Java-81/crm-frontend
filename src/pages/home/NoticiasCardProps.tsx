import React from "react";

interface NoticiaCardProps {
    imagem: string;
    titulo: string;
    autor: string;
    link: string;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({
    imagem,
    titulo,
    autor,
    link,
}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md
                            transition-shadow duration-300 min-w-[220px] max-w-[220px] flex-shrink-0">
            
            <div className="aspect-square w-full overflow-hidden">
                <img src={imagem} alt={titulo} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
                    {titulo}
                </h3>
            
                <p className="text-xs text-gray-600 mb-2">Por {autor}</p>
                <a
                    href={link}
                    className="text-[#D91147] hover:text-[#B30E3C] text-sm font-medium transition-colors"
                >
                    Saiba mais →
                </a>
            
            </div>
        </div>
    );
};

export default NoticiaCard;