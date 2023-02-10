import { useState } from "react";

export default function () {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const handleFormSubmit = (e) => {
        const { name, value } = e.target;
       
        if(value === ""){
            e.preventDefault();
            setError(`please check that the ${name} is filled`);
            setTimeout(()=>setError(""),4000)
            return;
        } 
    }
    return (
        <article id="property__article">
            <h2 id="property__h2">list Your property with us and be Confident that Your Room will be Filled Out!</h2>
            <form id="property__form">
                <label className="colorme header__label">Add A New Property</label>
                <label className={!error?"":"danger"}>{error}</label>
                <div id="form__fields">
                    <label className="label name__label">name<span className="colorme">*</span><br /><input type="text" onInput={handleFormSubmit} name="nameField" className="fields name__field" placeholder="enter name" /></label>

                    <label className="label address__label">address<span className="colorme">*</span><br /><input type="text" name="addressField" onInput={handleFormSubmit} className="fields address__field" placeholder="enter address" /></label>

                    <label className="label unit__label">unit number<span className="colorme">*</span><br /><input type="number" name="unitField" onInput={handleFormSubmit} className="fields unit__field" placeholder="enter unit" /></label>

                    <label className="label city__label">city<span className="colorme">*</span><br /><select name="cityField" className="fields city__field" onInput={handleFormSubmit}><option>select city</option></select></label>

                    <label className="label state__label">state<span className="colorme">*</span><br /><select name="stateField" className="fields state__field" onInput={handleFormSubmit}><option>select state</option></select></label>

                    <label className="label room__label">room type<span className="colorme">*</span><br /><select name="roomField" className="fields room__field" onInput={handleFormSubmit}><option>select room type</option></select></label>

                    <label className="label price__label">price<span className="colorme">*</span><br /><input type="number" name="priceField" className="fields price__field" onInput={handleFormSubmit} placeholder="enter price" /></label>

                    <label className="label description__label span__">description<span className="colorme">*</span><br /><textarea name="descriptionField" className="fields description__field" onInput={handleFormSubmit} placeholder="enter description" /></label>

                    <label className="label photo__label span__">upload photos<span className="colorme">*</span><br /><input type="file" accept=".jpg, .jpeg, .png" name="photoField" className="fields photo__field" text="drag your image here, or browse" /></label>

                    <button type="submit" id="add_new__btn" className="span__">add new property</button>
                </div>
            </form>
        </article>
    );
}