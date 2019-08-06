import React from 'react'
import { DynamicFormContainer } from 'components/DynamicForm'
import StatusQA from './Status.data'
import './Status.scss'

class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      status: null,
      userId: null,
    }
  }
  componentDidUpdate = prevProps => {
    // fetch all of users citations
    if (prevProps.user !== this.props.user) {
      if (this.props.user.id) {
        this.getStatus()
      }
    }
  }

  getStatus = () => {
    let userId = this.props.user.id
    this.setState({ userId })
    // return getNotes(userId, this.onSuccess, this.onError);
  }

  onSuccess = data => {
    this.setState({ loading: false, citations: data })
  }

  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false })
  }

  postFormData = formData => {
    this.setState({ loading: true, error: null })
    if (formData.participant_id) {
      //   return updateCitation(
      //     { id: userId, data: formData, citationId: formData.id },
      //     this.onSuccess,
      //     this.onError
      //   );
    }
    // return addCitation(
    //     { id: userId, data: formData },
    //     this.onSuccess,
    //     this.onError
    // );
    this.toggleEdit()
  }

  toggleEdit = () => {
    this.setState({ editModeVisible: !this.state.editModeVisible })
  }

  renderStatus = () => {
    let { status } = this.state

    return (
      <div className="status-form">
        <DynamicFormContainer
          initialData={status}
          questions={StatusQA}
          editableMode={true}
          onSubmit={this.postFormData}
        />
      </div>
    )
  }
  render() {
    return (
      <section className="status-container">
        <div className="status-title">Status</div>
        <div className="status-form-container">{this.renderStatus()}</div>
      </section>
    )
  }
}

export default Status
