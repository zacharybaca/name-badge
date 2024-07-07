/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Badge from "./Badge";
import "./badge-list.css";
export default function BadgeList(props) {
    return (
        <div>
            {console.log('Saved: ', props.savedBadges)}
            {/* props.savedBadges.length === 0 ? <p>No Saved Badges</p> : <ul>
                {props.savedBadges((badge) => {
                    return (
                        <li>
                            <Badge badgeData={badge}/>
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}