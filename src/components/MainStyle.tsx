import { useRecoilValue } from "recoil";
import { themeAtom } from "../atom";
import Btn from "./Btn";
import TitleImg from "./TitleImg";
import Snowfall from "react-snowfall";

const StyleContainer = () => {
    const toggleState = useRecoilValue(themeAtom);
    return (
        <>
            <Snowfall
                color={toggleState ? "#221F1E" : "rgba(111,111,111,0.15)"}
                snowflakeCount={20}
            />
            <Btn />
            <TitleImg />
        </>
    );
};

export default StyleContainer;
