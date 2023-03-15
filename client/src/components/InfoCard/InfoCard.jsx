import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

 
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                <div>
                    <UilPen
                        width="2rem"
                        height="1.2rem"
                        onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened} 
                    />
                </div>

            </div>

            <div className="info">
                {/* */}
                <span>
                    <b>Status </b>
                </span>
                <span>Single</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Kalyan</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Google</span>
            </div>

            <button className="button logout-button" >Log Out</button>
        </div>
    );
};

export default InfoCard;
