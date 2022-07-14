import { useRecoilState } from "recoil";
import { themeAtom } from "../atom";
import styled from "styled-components";

const CheckBox = styled.input.attrs({
    type: "checkbox",
    id: "toggleCheck",
    hidden: true,
})`
    width: 60px;
    height: 30px;
    border-radius: 10px;
`;

const ToggleBox = styled.div`
    position: absolute;
    right: 10px;
    margin: 10px;
    background: whitesmoke;
    border-radius: 10px;
    width: 60px;
    height: 30px;
`;

interface IThemeToggle {
    value?: boolean;
}

const ToggleBtn = styled.div<IThemeToggle>`
    position: absolute;
    top: 8%;
    left: 8%;
    background: tomato;
    width: 25px;
    height: 25px;
    border-radius: 9px;
`;

const Btn = () => {
    const [themeToggle, setThemeToggle] = useRecoilState(themeAtom);

    const themeToggleHandler = () => {
        setThemeToggle((prev) => !prev);
    };

    return (
        <>
            <CheckBox onClick={themeToggleHandler}></CheckBox>
            <label htmlFor="toggleCheck">
                <ToggleBox>
                    <ToggleBtn toggleProps={themeToggle} />
                </ToggleBox>
            </label>
        </>
    );
};

export default Btn;
