import { connect } from "react-redux";

import { IAppState } from "../Reducers/IAppState";

interface IAuthorsContainerProps {
  repoOwner: string;
}

function AuthorsContainer(props: IAuthorsContainerProps) {
  return <span>{props.repoOwner}</span>;
}

const mapStateToProps = (state: IAppState) => {
  return {
    repoOwner: state.authors.repoOwner,
  };
};

export default connect(mapStateToProps)(AuthorsContainer);
