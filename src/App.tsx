import React, { Suspense } from "react";
import Root from "./pages/root";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <div>
      <Suspense fallback = {<Loading/>}>
        <Root />
      </Suspense>
    </div>
  );
};

export default React.memo(App);
