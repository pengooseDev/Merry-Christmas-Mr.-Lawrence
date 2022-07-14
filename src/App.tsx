import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { themeAtom } from "./atom";
import StyleContainer from "./components/MainStyle";

const GlobalStyle = createGlobalStyle`
    body{
        transition: 0.2s ease-in-out;
        font-family: 'Source Sans Pro', sans-serif;
        background: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor}; 
    }
//   Reset CSS
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

img::selection{
    background: none;
}

body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
//+a reset
a{
    text-decoration: none;
    color: inherit;
    //default값은 inline임. display를 block으로 바꿔줌으로써, div전체가 클릭 가능해짐.
    display: block;
}
* {
    box-sizing: border-box;
}

    //prevent Drag CSS
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;

`;

function App() {
    const themeToggle = useRecoilValue(themeAtom);
    return (
        <>
            <ThemeProvider theme={themeToggle ? darkTheme : lightTheme}>
                <GlobalStyle />
                <StyleContainer />
            </ThemeProvider>
        </>
    );
}

export default App;
