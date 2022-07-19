import { useRecoilState } from "recoil";
import { themeAtom } from "../atom";
import styled from "styled-components";
import useSound from "use-sound";
import downSFX from "../assets/audio/down.mp3";
import upDarkSFX from "../assets/audio/upDark.mp3";
import upLightSFX from "../assets/audio/upLight.mp3";
const CheckBox = styled.input.attrs({
    type: "checkbox",
    id: "toggleCheck",
    hidden: true,
})`
    width: 60px;
    height: 30px;
    border-radius: 10px;
`;

const ToggleBox = styled.div<IThemeToggle>`
    position: absolute;
    right: 10px;
    margin: 10px;
    background: ${(props) =>
        props.toggleProps ? "rgba(111,111,111,0.5)" : "rgba(111,111,111,0.5)"};
    border-radius: 10px;
    width: 60px;
    height: 30px;
    :hover {
        cursor: pointer;
    }
`;

interface IThemeToggle {
    toggleProps?: boolean;
}

const ToggleBtn = styled.div<IThemeToggle>`
    position: absolute;
    top: 2.5px;
    left: ${(props) => (props.toggleProps ? "5px" : "30px")};
    background: ${(props) => (props.toggleProps ? "#D8D8D8" : "#111")};
    width: 25px;
    height: 25px;
    border-radius: 9px;
    transition: 0.2s ease-in-out;
`;

const Btn = () => {
    const [themeToggle, setThemeToggle] = useRecoilState(themeAtom);
    const [down] = useSound(downSFX);
    const [upDark] = useSound(upDarkSFX);
    const [upLight] = useSound(upLightSFX);

    const toggleSoundHandler = () => {
        if (themeToggle) {
            return upLight();
        }
        return upDark();
    };

    const downHandler = () => {
        down();
    };
    const themeToggleHandler = () => {
        setThemeToggle((prev) => !prev);
    };

    return (
        <>
            <CheckBox onClick={themeToggleHandler}></CheckBox>
            <label htmlFor="toggleCheck">
                <ToggleBox
                    toggleProps={themeToggle}
                    onMouseDown={downHandler}
                    onClick={toggleSoundHandler}
                >
                    <ToggleBtn toggleProps={themeToggle} />
                </ToggleBox>
            </label>
        </>
    );
};

export default Btn;
