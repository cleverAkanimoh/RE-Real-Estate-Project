export default function () {
    return (
        <article id="property__article">
            <h2 id="property__h2">list Your property with us and be Confident that Your Room will be Filled Out!</h2>
            <form id="property__form">
                <label id="header__label">Add A New Property</label>
                <div id="form__fields">
                    <label id="name__label">name<span className="colorme">*</span><br/><input type="text" name="nameField" className="fields name__field" placeholder="enter name" /></label>

                    <label id="address__label">address<span className="colorme">*</span><br/><input type="text" name="addressField" className="fields address__field" placeholder="enter address" /></label>

                    <label id="unit__label">unit number<span className="colorme">*</span><br/><input type="number" name="unitField" className="fields unit__field" placeholder="enter unit" /></label>

                    <label id="city__label">city<span className="colorme">*</span><br/><select type="text" name="cityField" className="fields city__field"><option>select city</option></select></label>

                    <label id="state__label">state<span className="colorme">*</span><br/><select type="text" name="stateField" className="fields state__field"><option>select state</option></select></label>

                    <label id="room__label">room type<span className="colorme">*</span><br/><select type="text" name="roomField" className="fields room__field"><option>select room type</option></select></label>

                    <label id="price__label">price<span className="colorme">*</span><br/><input type="text" name="price" className="fields price__field" placeholder="enter price" /></label>

                    <label id="description__label">description<span className="colorme">*</span><br/><textarea name="descriptionField" className="fields description__field" placeholder="enter description" /></label>

                    <label id="photo__label">upload photos<span className="colorme">*</span><br/><input type="file" accept=".jpg, .jpeg, .png" name="photoField" className="fields photo__field" placeholder="drag your image here, or browse" /></label>

                    <button type="submit" id="add_new__btn">add new property</button>
                </div>
            </form>
        </article>
    );
}