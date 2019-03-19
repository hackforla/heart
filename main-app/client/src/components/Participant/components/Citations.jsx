import React from "react";
import { DynamicFormContainer } from "components/DynamicForm";
import CitationsQA from "./Citations.data";
import getCitations from "api/getCitations.api";
import updateCitation from "api/updateCitation.api";
import deleteCitation from "api/deleteCitation.api";
import "./Citations.scss";
class Citations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      citations: [],
      userId: null
    };
  }
  componentDidUpdate = prevProps => {
    // fetch all of users citations
    if (prevProps.user !== this.props.user) {
      let userId = this.props.user.id;
      this.setState({ userId });
      return getCitations(userId, this.onSuccess, this.onError);
    }
  };
  onSuccess = data => {
    this.setState({ loading: false, citations: data });
  };
  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false });
  };
  postFormData = formData => {
    this.setState({ loading: true, error: null });
    let { userId } = this.state;
    if (formData.participant_id) {
      // update citation
      return updateCitation(
        { id: userId, data: formData, citationId: formData.id },
        this.onSuccess,
        this.onError
      );
    } else {
      // add new citation
      return updateCitation(
        { id: userId, data: formData },
        this.onSuccess,
        this.onError
      );
    }
  };
  deleteCitation = citationId => {
    this.setState({ loading: true, error: null });
    return deleteCitation(
      { id: this.state.userId, citationId },
      this.onSuccess,
      this.onError
    );
  };
  render() {
    return (
      <section className="citations-container">
        <div className="citations-title">Citations</div>
        <div className="citations-form">
          <DynamicFormContainer questions={CitationsQA} editableMode={true} />
        </div>
      </section>
    );
  }
}

export default Citations;
