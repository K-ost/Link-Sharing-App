import styled from "styled-components"
import uploadImg from "../assets/images/icon-upload-image.svg"
import { useState } from "react"

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

const Uploader: React.FC = () => {
  const [file, setFile] = useState<any>(null)

  console.log(file)

  return (
    <UploaderBox className="greybox">
      <UploaderTitle>Profile picture</UploaderTitle>
      <UploaderPhoto>
        <div><UploaderPhotoIcon src={uploadImg} alt="" /> <span>+ Upload Image</span></div>
        <UploaderFile onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files![0])} />
      </UploaderPhoto>
      <UploaderText>Image must be below 1024x1024px. Use PNG or JPG format.</UploaderText>
    </UploaderBox>
  )
}

export default Uploader
