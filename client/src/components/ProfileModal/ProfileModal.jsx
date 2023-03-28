import React, { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";

const ProfileModal = ({ modalOpened, setModalOpened }) => {

    const theme = useMantineTheme();
    
    return (
        <Modal
            overlaycolor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayopacity={0.55}
            overlayblur={3}
            size="55%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className="infoForm" >
                <h3>Your Info</h3>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        className="infoInput"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        className="infoInput"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Works at"
                        name="worksAt"
                        className="infoInput"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Lives in"
                        name="livesIn"
                        className="infoInput"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        className="infoInput"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        placeholder="Relationship status"
                        name="relationship"
                    />
                </div>

                <div>
                    Profile image
                    <input type="file" name="profileImage" />
                    Cover image
                    <input type="file" name="coverImage" />
                </div>

                <button className="button infoButton" type="submit">
                    Update
                </button>
            </form>
        </Modal>
    )
}

export default ProfileModal