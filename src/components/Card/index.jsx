import './index.scss'

function Card ({url,contenido}){
    return(
        <>
            <div className="macos-window">
                <div className="window-title-bar">
                    <div className="window-dots">
                        <div className="window-dot"></div>
                        <div className="window-dot"></div>
                        <div className="window-dot"></div>
                    </div>
                    <div className="window-title">{url}</div>
                </div>
                <div className="window-content">
                    {contenido}
                </div>
            </div>
        </>
    )
}

export default Card