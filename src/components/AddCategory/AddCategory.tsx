import { ChangeEvent, FormEvent, useState } from "react"
import { CategoriesProps } from './interfaces';

export const AddCategory = ({setCategories, categories}:CategoriesProps) => {

    const [inputValue, setInputValue] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {

        setInputValue(
            e.target.value
        )

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            
            setCategories([inputValue,...categories ])
            setInputValue('')

        } else {
            
            alert("La palabra debe ser mayor a 2 carateres");

        }

    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit} className="col-12 mt-2">

                <input type="text" 
                    className="w-100 my-4"
                    value={inputValue}
                    name="inputValue"
                    onChange={handleChange}
                /> 

            </form>
        </div>
    )
}
