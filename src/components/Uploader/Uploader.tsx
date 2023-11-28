import styled from "styled-components"
import React, { useState } from "react"
import { useAuth } from "../../store/useApp"
import uploadImg from "../../assets/images/icon-upload-image.svg"
import uploadImgWhite from "../../assets/images/icon-upload-white.svg"

interface IUploader {
  setPhoto: React.Dispatch<React.SetStateAction<string>>
}

// Styles
const size = '193px'
const UploaderBox = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 var(--gap);
  @media screen and (max-width: 750px) {
    display: block;
  }
`
const UploaderTitle = styled.div`
  margin: 0 16px 0 0;
  min-width: var(--labelw);
  @media screen and (max-width: 750px) {
    margin: 0 0 16px;
  }
`
const UploaderBody = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  @media screen and (max-width: 750px) {
    display: block;
  }
`
const UploaderText = styled.div`
  font-size: 12px;
  line-height: 18px;
  flex: 1;
`
const InputFile = styled.input.attrs({ type: 'file' })`
  cursor: pointer;
  height: ${size};
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: ${size};
`
const UploaderInner = styled.div<{ $loaded: boolean }>`
  background-color: ${props => props.$loaded ? 'rgba(0,0,0,0.5)' : '0'};
  background-position: center calc(50% - 14px);
  background-repeat: no-repeat;
  background-image: url(${props => props.$loaded ? uploadImgWhite : uploadImg});
  align-items: center;
  border-radius: 12px;
  bottom: 0;
  ${props => props.$loaded && 'color: var(--color-white);'}
  display: flex;
  justify-content: center;
  left: 0;
  padding-top: 44px;
  position: absolute;
  top: 0;
  width: 100%;
  transition: all 200ms ease-in-out;
  ${props => props.$loaded && 'opacity: 0; visibility: hidden;'}
`
const UploaderPhoto = styled.div`
  background: var(--color-purple-light);
  border-radius: 12px;
  color: var(--color-purple);
  font-weight: 600;
  height: ${size};
  margin: 0 var(--gap) 0 0;
  min-width: ${size};
  max-width: ${size};
  position: relative;
  text-decoration: center;
  &:hover ${UploaderInner} { opacity: 1; visibility: visible; }
  @media screen and (max-width: 750px) {
    margin: 0 0 24px;
  }
`
const UploaderPhotoImg = styled.img`
  border-radius: 12px;
  display: block;
  height: ${size};
  object-fit: cover;
  width: ${size};
`


const Uploader: React.FC<IUploader> = ({ setPhoto }) => {
  const photo = useAuth(state => state.auth?.photo)
  const [file, setFile] = useState<any>(photo)
  
  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObject = URL.createObjectURL(e.target.files![0])
    setPhoto(fileObject)
    setFile(fileObject)
  }

  return (
    <UploaderBox className="greybox">
      <UploaderTitle>Profile picture</UploaderTitle>
      <UploaderBody>
        <UploaderPhoto>
          {file && <UploaderPhotoImg src={file} alt="" />}
          <UploaderInner $loaded={!!file}>
            <div>{!!file ? 'Change' : '+ Upload'} Image</div>
          </UploaderInner>
          <InputFile onChange={uploadHandler} />
        </UploaderPhoto>
        <UploaderText>Image must be below 1024x1024px. Use PNG or JPG format.</UploaderText>
      </UploaderBody>
    </UploaderBox>
  )
}

export default Uploader
