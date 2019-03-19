import React from "react";
import { DynamicFormContainer } from "components/DynamicForm";
import CitationsQA from "./Citations.data";
import "./Citations.scss";
class Citations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
    }
  }
  onSuccess = (data) => {
    this.initializeFormState(data);
    this.setState({ loading: false })
  }
  onError = (errorMessage) => {
    this.setState({ error: errorMessage, loading: false });
  }
  postFormData = (id, formData) => {
    this.setState({ loading: true, error: null });
    return updateParticipant({ id, data: formData }, this.onSuccess, this.onError);
  }
  render() {
    return (
      <section className="citations-container">
        <div className="citations-title">Citations</div>
        <div className="citations-form">
          <DynamicFormContainer questions={CitationsQA} editableMode={true} onSubmit={} />
        </div>
      </section>
    );
  }
}

export default Citations;
