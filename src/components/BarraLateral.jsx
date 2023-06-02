import style from './Main.module.css'
import { useState } from 'react';




export default function BarraLateral() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue.match(/^[0-9+\-*/().]*$/)) {
            setValue(newValue);
            console.log(newValue);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado com:', value);
    }


    return (
        <>
            <div className={style.containerLateral}>
                <div className={style.divInput}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" value={value} onChange={handleChange} className={style.input} />
                        </div>
                        <div className={style.divInput} >
                            <button type="submit" className={style.button}>Calcular</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}