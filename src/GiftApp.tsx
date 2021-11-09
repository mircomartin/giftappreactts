import { useState } from "react"
import { AddCategory } from "./components/AddCategory/AddCategory"
import { GiftGrid } from "./components/GiftGrid/GiftGrid"

export const GiftApp = () => {

    const [categories, setCategories] = useState<string[]>(['John John Florence'])

    return (
        <div className="container py-5">
            <h2 className="text-center">Gift Expert App with TS</h2>

            <AddCategory setCategories={setCategories} categories={categories} /> 
            
            <hr />

            <div className="row">
                {
                    categories.map((category) => (

                        <GiftGrid key={category} category={category}/>
            
                    ))
                }
            </div>
        </div>
    )
}
