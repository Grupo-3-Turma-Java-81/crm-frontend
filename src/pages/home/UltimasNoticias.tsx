import React from "react";

import NoticiaCard from "./NoticiasCardProps";
import imgVacinaVSR from "../../assets/noticias/vacina-vsr.png";
import imgPneumo20 from "../../assets/noticias/pneumo-20-2.jpg";
import imgNirsevimabe from "../../assets/noticias/nirsevimabe.png";
import imgGlicoseAlta from "../../assets/noticias/glicose-alta.jpg";
import imgVacinaHerpes from "../../assets/noticias/vacina_herpes_zoster.jpg";
import imgVacinaGripe from "../../assets/noticias/vacina-gripe-idoso-efluelda.png";

const noticias = [
    {
        imagem: imgVacinaHerpes,
        titulo: "Vacina herpes zóster: quem pode tomar e benefícios da vacinação",
        autor: "Dra. Maria Isabel de Moraes",
        link: "#",
    },
    {
        imagem: imgNirsevimabe,
        titulo: "Nirsevimabe (Beyfortus): proteção contra a bronquiolite",
        autor: "Dra. Maria Isabel de Moraes",
        link: "#",
    },
    {
        imagem: imgVacinaGripe,
        titulo: "Vacina Gripe para idosos: conheça a Efluelda, vacina de alta dose",
        autor: "Dra. Maria Isabel de Moraes",
        link: "#",
    },
    {
        imagem: imgVacinaVSR,
        titulo:
            "Vacina VSR: reduza a gravidade da doença e o risco de hospitalização",
        autor: "Dra. Maria Isabel de Moraes",
        link: "#",
    },
    {
        imagem: imgPneumo20,
        titulo: "Pneumo 20: conheça a nova vacina",
        autor: "Dra. Maria Isabel de Moraes",
        link: "#",
    },
    {
        imagem: imgGlicoseAlta,
        titulo: "Glicose alta: quais os riscos e como tratar?",
        autor: "Raquel Ribeiro",
        link: "#",
    },
];

const UltimasNoticias: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Últimas notícias</h2>
            
            <div className="overflow-x-auto">
                <div className="flex gap-4 pb-2 scrollbar-hide">
                    {noticias.map((noticia, index) => (
                        <NoticiaCard key={index} {...noticia} />
                    ))}
                </div>
            
            </div>
        </div>
    );
};

export default UltimasNoticias;