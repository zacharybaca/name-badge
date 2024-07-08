/* eslint-disable react/prop-types */

import "./badge.css";
export default function Badge(props) {
    
    return (
    <div id="all-badges-container">
        <header id="badge-header" style={{backgroundColor: Number(props.itemNumber) % 2 === 0 ? "blue" : "red"}}>Badge:</header>
        <div id="badge-container">
            <div id="badge-name-container">
                <p>Name: {`${props.badgeData.firstName} ${props.badgeData.lastName}`}</p>
            </div>
            <div id="badge-personal-info-container">
                <p>Email: {props.badgeData.email}</p>
                <p>Place of Birth: {props.badgeData.birthplace}</p>
            </div>
            <div id="badge-other-info-container">
                <p>Phone: {props.badgeData.phone}</p>
                <p>Favorite Food: {props.badgeData.food}</p>
            </div>
            <div id="badge-about-container">
                <p>{props.badgeData.about}</p>
            </div>
        </div>
    </div>
    )
}