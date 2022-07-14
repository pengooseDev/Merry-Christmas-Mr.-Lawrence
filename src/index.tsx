import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/*

1) Implement a beautiful dark mode toggle button.
2) Implement a back button from the /:coinId route.
3) Implement the /:coinId/price tab
4) Implement a CandleStick chart on the /:coinId/chart tab.

*/
