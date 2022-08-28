import React, { useState } from "react";
import * as S from "./globalstyle";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import MainContent from "./pages/MainContent/MainContent";
import SideBarOnRight from "./layouts/SideBarOnRight/SideBarOnRight";
import { store } from "./app/store";
import { Provider } from "react-redux";
const App = () => {
  const [isShowSide, setIsShowSide] = useState(false);
  return (
    <Provider store={store}>
      <div className="app__container">
        <S.globalStyle></S.globalStyle>
        <SideBarOnRight
          isShowSide={isShowSide}
          setIsShowSide={() => setIsShowSide(!isShowSide)}
        />
        <Header setIsShowSide={() => setIsShowSide(!isShowSide)} />
        <MainContent />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
