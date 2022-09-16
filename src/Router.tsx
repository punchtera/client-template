import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import AuthorsContainer from "./Components/AuthorsContainer";
import { PageContainer } from "./Components/PageContainer";

const Router = (props: Record<string, unknown>): ReactElement => {
  return (
    <Routes>
      <Route {...props} path="/" element={<AuthorsContainer />} />
      <Route {...props} path="/page" element={<PageContainer />} />
    </Routes>
  );
};

export default Router;
