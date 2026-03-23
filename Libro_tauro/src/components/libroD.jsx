export default function LibroD({
    imagen,
    titulo,
    autor,

}){
    return(
        <div>
            <div>
                <img src={imagen} alt="" />
            </div>
            <div>
                <h2>{titulo}</h2>
                <p>{autor}</p>
            </div>
        </div>
    )
}