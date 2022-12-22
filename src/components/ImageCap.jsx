import React, {useState} from 'react'
import Webcam from 'react-webcam'
import { triggerBase64Download } from 'react-base64-downloader';

var numImages = 0
var images = []

const videoContraints = {
    width: 400,
    height: 400,
    facingMode: "user",
}

function ImageCap() {
    const [images, setImages] = useState([])


  return (
    <div>
        <div className='webcam'>
            <Webcam
            audio={false}
            videoConstraints={videoContraints}
            screenshotFormat="image/jpeg"
            height={400}
            width={400}>
                {({ getScreenshot }) => (
                    <button 
                    onClick={() => {
                        const imageSrc = getScreenshot({width: 1920, height: 1080})
                        setImages([...images, imageSrc])
                        numImages++
                    }}
                    class="bg-blue-500"
                >
                    Capture Image
                </button>
                )}
            </Webcam>
        </div>
        <div class='grid-cols-2'>
            {images.map((e) => (
                <img class="w-40" key={numImages+e} src={e}/>
            ))}
        </div>
    </div>
  )
}

export default ImageCap