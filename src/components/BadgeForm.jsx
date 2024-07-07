/* eslint-disable react/prop-types */
import React from "react";
import "./badge-form.css";
export default function BadgeForm(props) {
    

    const [formState, setFormState] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            birthplace: "",
            phone: "",
            food: "",
            about: ""
        }
    )

    function handleChange(event) {
        event.preventDefault();
        const {name, value} = event.target;

        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function addBadge(event) {
        event.preventDefault();

        props.save(prevState => ({
            ...prevState,
            formState
        }))

        setFormState({
                firstName: "",
                lastName: "",
                email: "",
                birthplace: "",
                phone: "",
                food: "",
                about: ""
        })
    }

   let valueEntered = formState.firstName && formState.lastName && formState.email && formState.birthplace && formState.phone && formState.food && formState.about;

    return (
            <form id="badge-form" name="badge" onSubmit={addBadge}>
                <div id="name-container">
                    <input 
                        type="text" 
                        id="first-name" 
                        name="firstName" 
                        minLength="3"
                        onChange={handleChange}
                        value={formState.firstName}
                        placeholder="First Name" 
                    />

                    <input 
                        type="text" 
                        id="last-name" 
                        name="lastName" 
                        minLength="3"
                        onChange={handleChange}
                        value={formState.lastName}
                        placeholder="Last Name" 
                    />
                </div>
                   
                <div id="personal-info-container">
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        minLength="3"
                        onChange={handleChange} 
                        value={formState.email}
                        placeholder="Email" 
                    />

                    <input 
                        type="text" 
                        id="birthplace" 
                        name="birthplace" 
                        minLength="3"
                        onChange={handleChange}
                        value={formState.birthplace}
                        placeholder="Place of Birth" 
                    />
                </div>
                   
                <div id="other-info-container">
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        minLength="3"
                        onChange={handleChange}
                        value={formState.phone}
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        placeholder="Phone" 
                    />
                    
                    <input 
                        type="text" 
                        id="food" 
                        name="food" 
                        minLength="3"
                        onChange={handleChange}
                        value={formState.food}
                        placeholder="Favorite Food" 
                    />
                </div>

                <div id="about-container">
                    <textarea 
                        rows="6"
                        cols="50"
                        name="about"
                        minLength="3"
                        onChange={handleChange}
                        value={formState.about}
                        placeholder="Tell us about yourself"
                    />
                </div>   
                
                <div id="button-container">
                    <button type="submit" disabled={!valueEntered}>Submit</button>
                </div>
                
                
            </form>
    )
}