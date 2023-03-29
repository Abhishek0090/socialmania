import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UploadImage } from "../../redux/actions/UploadActions";
import { updateUser } from "../../redux/actions/UserActions";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.AuthReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };


   // form submission
   const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(UploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(UploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

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
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className="infoInput"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoInput"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Works at"
            name="worksAt"
            className="infoInput"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Lives in"
            name="livesIn"
            className="infoInput"
            onChange={handleChange}
            value={formData.livesIn}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            className="infoInput"
            onChange={handleChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship status"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>

        <div>
          Profile image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>

        <button className="button infoButton" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
