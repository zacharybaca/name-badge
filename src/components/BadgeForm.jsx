
import "./badge-form.css";
export default function BadgeForm() {
    return (
            <form id="badge-form">
                <div id="name-container">
                    <input 
                        type="text" 
                        id="first-name" 
                        name="firstName" 
                        placeholder="First Name" 
                    />

                    <input 
                        type="text" 
                        id="last-name" 
                        name="lastName" 
                        placeholder="Last Name" 
                    />
                </div>
                   
                <div id="personal-info-container">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                    />

                    <input 
                        type="text" 
                        id="birthplace" 
                        name="birthplace" 
                        placeholder="Place of Birth" 
                    />
                </div>
                   
                <div id="other-info-container">
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Phone" 
                    />

                    <input 
                        type="text" 
                        id="food" 
                        name="food" 
                        placeholder="Favorite Food" 
                    />
                </div>

                <div id="about-container">
                    <textarea 
                        placeholder="Tell us about yourself"
                    />
                </div>   
                
                <div id="button-container">
                    <button> Submit</button>
                </div>
                
                
            </form>
    )
}