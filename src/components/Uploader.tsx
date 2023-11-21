import styled from "styled-components"
import uploadImg from "../assets/images/icon-upload-image.svg"

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

const Uploader: React.FC = () => {
  return (
    <UploaderBox className="greybox">
      <UploaderTitle>Profile picture</UploaderTitle>
      <UploaderPhoto>
        <div><UploaderPhotoIcon src={uploadImg} alt="" /> <span>+ Upload Image</span></div>
      </UploaderPhoto>
      <UploaderText>Image must be below 1024x1024px. Use PNG or JPG format.</UploaderText>
    </UploaderBox>
  )
}

export default Uploader
