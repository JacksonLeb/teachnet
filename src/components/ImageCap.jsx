import React, {useState, useRef, useCallback, useEffect} from 'react'
import Webcam from 'react-webcam'

const videoContraints = {
    width: 400,
    height: 400,
    facingMode: "user",
}

function ImageCap(props) {
    const [images, setImages] = useState([])
    const [mouseDown, setMouseDown] = useState(false)
    const [numImages, setNumImages] = useState(-1)
    const webcamRef = useRef(null)
    const intervalRef = useRef(null)

    useEffect(() => {
        setNumImages(images.length);
    });
    
    const capture = () => {
        console.log("START");
        intervalRef.current = setInterval(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            setImages(images => [...images, imageSrc]);
            setNumImages(images.length);
        }, 30)
        console.log("END");
    }

    const uncaptureClick = () => {
        console.log("CLEARING");
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

  return (
    <div class='h-screen'>
        <h1 class="text-xl font-extrabold mx-36">{props.classLabel}</h1>
        <div class='grid grid-cols-2 h-1/4 w-3/4'>
            <div className='webcam'>
                <Webcam
                class='w-full rounded-lg'
                audio={false}
                ref={webcamRef}
                videoConstraints={videoContraints}
                screenshotFormat="image/jpeg"
                height={400}
                width={400}>
                    {({ getScreenshot }) => (
                        <button 
                        onMouseDown={() => {
                            setMouseDown(true)
                            capture()
                        }}
                        onMouseUp={() => {
                            setMouseDown(false)
                            uncaptureClick()
                        }}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Capture Image
                        </button>
                    )}
                </Webcam>
            </div>
            <div class='w-full rounded-lg grid grid-cols-4 gap-1 overflow-scroll'>
                {images.map((e) => (
                    <img class="rounded-lg" key={numImages+e} src={e} alt={numImages+e}/>
                ))}
            </div>
            <h1 className='m-1/2'>Number of Images: {numImages}</h1>
        </div>
    </div>
  )
}

export default ImageCap