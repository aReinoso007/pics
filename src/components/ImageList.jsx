import React from "react";
import ImageShow from "./ImageShow";
import './ImageList.css'

/*
function based component
*/
const ImageList = ({images}) => {

    const renderedImages = images.map((image)=>{
        return <ImageShow key={image.id} image={image}/>
    })

    if(images.length === 0) return <div>Ingrese algo para buscar</div>
    return(
        <div className="image-list">
          {renderedImages}
        </div>
    )
}

export default ImageList;