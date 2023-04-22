import './index.scss'

export const Toolbar = ({ onFormat, onGenerateLink }) => {
    return(
        <div className="toolbar">
            <button className="toolbar__format" onClick={onFormat}>Format</button>
            <button className="toolbar__link" onClick={onGenerateLink}>Generar link</button>
            <button className="toolbar__copy">Copiar</button>
            <button className="toolbar__paste">Pegar</button>
        </div>
    )
}
