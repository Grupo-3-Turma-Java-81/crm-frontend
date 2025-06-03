import { InstagramLogoIcon, GithubLogoIcon } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gray-200 text-blue-950">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Gen Health Care - Grupo 03 | Copyright: {data}
                    </p>

                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-4'>
                        <a href="https://github.com/Grupo-3-Turma-Java-81" target="_blank">
                            <GithubLogoIcon size={48} />
                        </a>
                        
                        <a href="https://www.instagram.com/generationbrasil/p/DHJ98FCvJdo/" target="_blank">
                            <InstagramLogoIcon size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer