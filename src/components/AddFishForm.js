import React from 'react'

class AddFishForm extends React.Component{

    

    submitHandler(e) {
        e.preventDefault();
        const fish = {
            name:this.name.value,
            price:this.price.value,
            status:this.status.value,
            desc:this.desc.value,
            image:this.image.value
        }
        this.props.addFish(fish)
        this.formData.reset()
    }

    render() {
        return(
            <form className="fish-edit" ref={(input) => this.formData = input} onSubmit={(e) => this.submitHandler(e)}>
                <input name="name" ref={(input) => this.name = input} type="text" placeholder="name"/>
                <input name="price" ref={(input) => this.price = input} type="text" placeholder="price"/>
                <select name="status" ref={(input) => this.status = input} type="text" placeholder="status">
                    <option value="available">Fresh !!</option>
                    <option value="unavailable">Sold Out !!</option>
                </select>
                <textarea name="desc" ref={(input) => this.desc = input} type="text" placeholder="desc"/>
                <input name="image" ref={(input) => this.image = input} type="text" placeholder="image"/>
                <button>+ Add fish</button>
            </form>
        )
    }
}
export default AddFishForm;






