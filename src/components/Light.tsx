import light from "../assets/img/light.png";
import { themeAtom } from "../atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface IToggleAtom {
    toggleData: boolean;
}

const LightImg = styled.img.attrs({ src: light })<IToggleAtom>`
    position: absolute;
    top: ${(props) => (props.toggleData ? "10px" : "-100px")};
    left: 30%;

    transform: rotate(0.5turn);
    width: 100px;
    transition: 0.2s ease-in-out;
    filter: invert(70%) sepia(20%) hue-rotate(1110deg)
        drop-shadow(3px 3px 30px bisque);
    //prevent Drag CSS
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`;

const Light = () => {
    const toggleAtom = useRecoilValue(themeAtom);
    return <LightImg toggleData={toggleAtom}></LightImg>;
};

export default Light;
