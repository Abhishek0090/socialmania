import React, { useRef, useState } from "react";
import ProfileImage from "../../img/abhi.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { UploadImage } from "../../redux/actions/UploadActions";

const PostShare = () => {

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const desc = useRef();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.AuthReducer.authData);

  console.log(user)

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  }

  const handleUpload = (e) => {

    e.preventDefault();
 


    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName

      console.log(newPost);

      try {
        dispatch(UploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

  }

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input ref={desc} required type="text" placeholder="What's Happenning?" />

        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleUpload}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
