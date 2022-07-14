import titlepng from "../assets/img/titleImg.png";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../atom";

interface IToggleState {
    toggleState: boolean;
}

const ImgContainer = styled.img.attrs({ src: titlepng })<IToggleState>`
    position: absolute;
    bottom: 0px;
    width: 500px;

    transition: 0.2s ease-in-out;
    filter: ${(props) =>
        props.toggleState
            ? `invert(70%) sepia(20%) hue-rotate(30deg)
        drop-shadow(3px 3px 30px bisque)`
            : `invert(50%) sepia(50%) hue-rotate(10deg)
        drop-shadow(3px 3px 30px bisque)`};
`;

const TitleImg = () => {
    const toggleState = useRecoilValue(themeAtom);
    return <ImgContainer toggleState={toggleState}></ImgContainer>;
};

export default TitleImg;
