import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState<string>('')

    const dispatch = useDispatch()
    const { addCategoryAction } = bindActionCreators(actions, dispatch)

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {

        setInputValue(
            e.target.value
        )

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            
            addCategoryAction(inputValue)
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
