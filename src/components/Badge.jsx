/* eslint-disable react/prop-types */

import "./badge.css";
export default function Badge(props) {
    return (
        <div>
            <h1>{props.badgeData.firstName}</h1>
            <h1>{props.badgeData.lastName}</h1>
            <h1>{props.badgeData.email}</h1>
            <h1>{props.badgeData.birthplace}</h1>
            <h1>{props.badgeData.phone}</h1>
            <h1>{props.badgeData.food}</h1>
            <h1>{props.badgeData.about}</h1>
        </div>
    )
}