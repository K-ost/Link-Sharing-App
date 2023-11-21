import styled from "styled-components"
import uploadImg from "../assets/images/icon-upload-image.svg"
import React, { useState } from "react"
import { useAuth } from "../store/useAuth"

interface IUploader {
  setPhoto: React.Dispatch<React.SetStateAction<string>>
}

// Styles
const UploaderBox = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 var(--gap);
`
const UploaderPhoto = styled.div`
  align-items: center;
  background: var(--color-purple-light);
  border-radius: 12px;
  color: var(--color-purple);
  display: flex;
  font-weight: 600;
  height: 193px;
  justify-content: center;
  margin: 0 var(--gap);
  min-width: 193px;
  position: relative;
  text-decoration: center;
  span { display: block; }
`
const UploaderPhotoIcon = styled.img`
  display: block;
  margin: 0 auto 8px;
`
const UploaderTitle = styled.div`
  width: 45%;
`
const UploaderText = styled.div`
  font-size: 12px;
  line-height: 18px;
  flex: 1;
`
const UploaderFile = styled.input.attrs({ type: 'file' })`
  cursor: pointer;
  height: 193px;
  left: 0;
  opacity: 0;
  top: 0;
  position: absolute;
  width: 193px;
`

const Uploader: React.FC<IUploader> = ({ setPhoto }) => {
  const photo = useAuth(state => state.profile?.photo)
  
  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(URL.createObjectURL(e.target.files![0]))
  }

  return (
    <UploaderBox className="greybox">
      <UploaderTitle>Profile picture</UploaderTitle>
      <UploaderPhoto>
        {photo && <img src={photo} alt="" />}
        <div><UploaderPhotoIcon src={uploadImg} alt="" /> <span>+ Upload Image</span></div>
        <UploaderFile onChange={uploadHandler} />
      </UploaderPhoto>
      <UploaderText>Image must be below 1024x1024px. Use PNG or JPG format.</UploaderText>
    </UploaderBox>
  )
}

export default Uploader
