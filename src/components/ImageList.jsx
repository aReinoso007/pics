import React from "react";
import ImageShow from "./ImageShow";

/*
function based component
*/
const ImageList = ({images}) => {

    const renderedImages = images.map((image)=>{
        return <ImageShow image={image}/>
    })

    if(images.length === 0) return <div>Ingrese algo para buscar</div>
    return(
        <div>
          {renderedImages}
        </div>
    )
}

export default ImageList;