import { connect } from "react-redux";

import { IAppState } from "../Reducers/IAppState";
import * as AuthorsAction from "../Reducers/Authors/AuthorsAction";
import { Dispatch } from "@reduxjs/toolkit";

interface IAuthorsContainerProps {
  repoOwner: string;
  callbacks: {
    onGetRepoOwnerClick: () => void;
  };
}

function AuthorsContainer(props: IAuthorsContainerProps) {
  const { repoOwner, callbacks } = props;

  return (
    <div>
      <span>{repoOwner}</span>
      <button onClick={callbacks.onGetRepoOwnerClick}>Get Repo Owner!</button>
    </div>
  );
}

const mapStateToProps = (state: IAppState) => {
  return {
    repoOwner: state.authors.repoOwner,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthorsAction.IGetRepoOwnerData>) => {
  return {
    callbacks: {
      onGetRepoOwnerClick: () => {
        dispatch(AuthorsAction.getRepoOwnerData());
      },
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer);
