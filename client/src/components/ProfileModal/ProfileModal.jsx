import React, { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {

    const theme = useMantineTheme();

    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch();
    const param = useParams();

 
    const { user } = useSelector((state) => state.AuthReducer.authData);



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