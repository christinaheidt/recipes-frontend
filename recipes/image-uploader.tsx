import styled from "styled-components";
import { ImageContainer, ImageContainerImage } from "./recipe-image";
import Button, { TransparentButton } from "../components/button";
import { useState, createRef } from "react";
import axios from "axios";
import FadeIn from "react-fade-in";

const FlexImageContainer = styled(ImageContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InvisibleInput = styled.input`
    display: none;
`

type ImageUploaderProps = {
    imagepath: string;
    onImageUploaded: (newImagePath: string) => void;
}


const ImageUploader: React.FunctionComponent<ImageUploaderProps> = (props) => {
    const [isUploadingImage, onIsUploadingImageChanged] = useState(false);
    const fileUploadRef = createRef<HTMLInputElement>();
    const uploadImage = async (file: any) => {
        onIsUploadingImageChanged(true);
        const formData = new FormData();
        formData.append('image', file);
        const createdImagePath = await await axios.post<{ dbPath: string }>('https://localhost:5001/api/images', formData).then(response => `https://localhost:5001/${response.data.dbPath}`);
        props.onImageUploaded(createdImagePath);
        onIsUploadingImageChanged(false);
    };

    const onClick = () => {
        if (isUploadingImage || !fileUploadRef.current) {
            return;
        }
        fileUploadRef.current.click()
    }

    return (
        <>
            <FlexImageContainer>
                <ImageContainerImage src={props.imagepath ? props.imagepath : '/recipe-placeholder.png'} alt="Recipe Image" />
                {isUploadingImage ? <></> : <FadeIn>{
                    props.imagepath ?
                        <TransparentButton onClick={onClick} type="button">Change Image</TransparentButton> :
                        <Button onClick={onClick} type="button">Add Image</Button>
                }</FadeIn>}
                <InvisibleInput ref={fileUploadRef} onChange={(e) => uploadImage((e.target.files && e.target.files.length > 0) ? e.target.files[0] : null)} type="file" />
            </FlexImageContainer>
        </>
    )
}

export default ImageUploader;