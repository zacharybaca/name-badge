/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Badge from "./Badge";
import "./badge-list.css";
export default function BadgeList(props) {
    return (
        <div>
            {console.log('Saved: ', props.savedBadges)}
            {props.savedBadges.length === 0 ? <div id="no-save-container"><p id="no-save">No Saved Badges</p></div> : <ul>
                {props.savedBadges.map((badge, index) => {
                    return (
                        <li key={index}>
                            <Badge badgeData={badge.formState}/>
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}