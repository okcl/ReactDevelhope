import React, { useRef, useEffect } from 'react';

function CarDetails({initialData}) {
    const modelRef = useRef("")
    const yearRef = useRef("")
    const colorRef = useRef("")

    useEffect(() => {
        if (initialData) {
          modelRef.current.value = initialData.model || '';
          yearRef.current.value = initialData.year || '';
          colorRef.current.value = initialData.color || '';
        }
    }, [initialData]);
      

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className='flex-wrap'>
            <form onSubmit={handleSubmit}>
                Model: <input type="text" ref={modelRef} />
                Year: <input type="text" ref={yearRef} />
                Color: <input type="text" ref={colorRef} />
                <button className='bg-gray-200 h-100' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CarDetails