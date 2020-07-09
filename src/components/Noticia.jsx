import React from 'react';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia

    const imagen = (urlToImage) ?
    
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>

    : 'imagen no disponible'

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                
                {imagen}
                
                <div className="card-content"></div>
                <h6>{title}</h6>
                <p>{description}</p>

                <div className="card-action">
                    <a 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver Noticia
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;