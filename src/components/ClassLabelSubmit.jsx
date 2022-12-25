import React, {useState, useRef} from 'react'
import ImageCap from './ImageCap'

function ClassLabelSubmit() {
    const [classLabel, setClassLabel] = useState('')
    const [classes, setClasses] = useState([])
    const textRef = useRef();

    const handleChange = (e) => {
        e.preventDefault();
        setClassLabel(e.target.value);
    }

    const handleSubmit = () => {
        setClasses(classes => [...classes, classLabel]);
        setClassLabel('');
        console.log(textRef.current.val);
        textRef.current.value = '';
    }

  return (
    <div>
        <form>
            <label>Class Name: </label>
            <div className='flex'>
                <input 
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-1/4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    placeholder="Class Name..." 
                    type="text" 
                    ref={textRef}
                    onChange={handleChange}
                />
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    onClick={handleSubmit}
                    type="button">
                        Submit Class
                </button>
            </div>
        </form>
        <div>
            <div class="flex">
                {classes.map((e) => (
                    <ImageCap classLabel={e} class="rounded-lg" key={e} src={e} alt={e}/>
                ))}
            </div>
        </div>
        <button
            class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mx-4"
            type="button"
        >
            Load Model
        </button>
    </div>
  )
}

export default ClassLabelSubmit