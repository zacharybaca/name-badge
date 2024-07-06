
import "./badge-form.css";
export default function BadgeForm() {
    

    return (
            <form id="badge-form" name="badge">
                <div id="name-container">
                    <input 
                        type="text" 
                        id="first-name" 
                        name="firstName" 
                        minLength="3"
                        placeholder="First Name" 
                    />

                    <input 
                        type="text" 
                        id="last-name" 
                        name="lastName" 
                        minLength="3"
                        placeholder="Last Name" 
                    />
                </div>
                   
                <div id="personal-info-container">
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        minLength="3" 
                        placeholder="Email" 
                    />

                    <input 
                        type="text" 
                        id="birthplace" 
                        name="birthplace" 
                        minLength="3"
                        placeholder="Place of Birth" 
                    />
                </div>
                   
                <div id="other-info-container">
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        minLength="3"
                        placeholder="Phone" 
                    />

                    <input 
                        type="text" 
                        id="food" 
                        name="food" 
                        minLength="3"
                        placeholder="Favorite Food" 
                    />
                </div>

                <div id="about-container">
                    <textarea 
                        rows="6"
                        cols="50"
                        minLength="3"
                        placeholder="Tell us about yourself"
                    />
                </div>   
                
                <div id="button-container">
                    <button type="submit">Submit</button>
                </div>
                
                
            </form>
    )
}