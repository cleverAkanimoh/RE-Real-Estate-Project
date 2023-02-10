import { useState } from "react";

export default function () {
    const [inputValue, setInputValue] = useState({
        nameField: "",
        addressField: "",
        unitField: "",
        cityField: "not selected",
        stateField: "not selected",
        roomField: "not selected",
        priceField: "",
        descriptionField: ""
    });
    const [error, setError] = useState("");

    const updateInputValue = (e) => {
        const { name, value } = e.target;
        setInputValue(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        if (!inputValue.nameField || !inputValue.addressField || !inputValue.unitField || !inputValue.priceField || !inputValue.descriptionField) {
            e.preventDefault();
            setError(`please ensure that all fields are filled`)
            setTimeout(() => setError(""), 6000)
        }
    }

    return (
        <article id="property__article">
            <h2 id="property__h2">list Your property with us and be Confident that Your Room will be Filled Out!</h2>
            <form id="property__form" onSubmit={handleSubmit}>
                <label className="colorme header__label">Add A New Property</label>
                <label className={!error ? "" : "danger"}>{error}</label>
                <div id="form__fields">
                    <label className="label name__label">name<span className="colorme">*</span><br /><input type="text" value={inputValue.nameField} onInput={updateInputValue} name="nameField" className="fields name__field" placeholder="enter name" /></label>

                    <label className="label address__label">address<span className="colorme">*</span><br /><input type="text" name="addressField" value={inputValue.addressField} onInput={updateInputValue} className="fields address__field" placeholder="enter address" /></label>

                    <label className="label unit__label">unit number<span className="colorme">*</span><br /><input type="number" name="unitField" value={inputValue.unitField} onInput={updateInputValue} className="fields unit__field" placeholder="enter unit" /></label>

                    <label className="label city__label">city<span className="colorme">*</span><br /><select name="cityField" className="fields city__field" value={inputValue.cityField} onInput={updateInputValue}><option>select city</option></select></label>

                    <label className="label state__label">state<span className="colorme">*</span><br /><select name="stateField" className="fields state__field" value={inputValue.stateField} onInput={updateInputValue}><option>select state</option></select></label>

                    <label className="label room__label">room type<span className="colorme">*</span><br /><select name="roomField" className="fields room__field" value={inputValue.roomField} onInput={updateInputValue}><option>select room type</option></select></label>

                    <label className="label price__label">price<span className="colorme">*</span><br /><input type="number" name="priceField" className="fields price__field" value={inputValue.priceField} onInput={updateInputValue} placeholder="enter price" /></label>

                    <label className="label description__label span__">description<span className="colorme">*</span><br /><textarea name="descriptionField" className="fields description__field" value={inputValue.descriptionField} onInput={updateInputValue} placeholder="enter description" /></label>

                    <label className="label photo__label span__">upload photos<span className="colorme">*</span><br /><input type="file" accept=".jpg, .jpeg, .png" name="photoField" className="fields photo__field" text="drag your image here, or browse" /></label>

                    <button type="submit" id="add_new__btn" className="span__">add new property</button>
                </div>
            </form>
        </article>
    );
}