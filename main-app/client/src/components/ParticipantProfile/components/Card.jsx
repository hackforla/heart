import React from 'react'
import './Card.scss'
import UserInfoItems from './UserInfoItems'
import UserNameItems from './UserNameItems'
import updateParticipant from 'api/updateParticipant.api'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      btnText: 'Edit',
      localUserInfo: {},
      changeInFormState: false,
      error: null,
      loading: false,
    }
  }
  componentDidMount() {
    let { user } = this.props
    if (user) {
      this.initializeFormState(user)
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.initializeFormState(this.props.user)
    }
  }
  toggleEditMode = () => {
    let { editing, localUserInfo, changeInFormState } = this.state
    if (this.props.user) {
      let { id } = this.props.user
      if (editing && changeInFormState) {
        this.postFormData(id, localUserInfo)
      }
    }
    this.setState({
      editing: !editing,
      btnText: !editing ? 'Save' : 'Edit',
      changeInFormState: false,
    })
  }
  onSuccess = data => {
    this.initializeFormState(data)
    this.setState({ loading: false })
  }
  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false })
  }
  postFormData = (id, formData) => {
    this.setState({ loading: true, error: null })
    return updateParticipant(
      { id, data: formData },
      this.onSuccess,
      this.onError
    )
  }
  editHandler = e => {
    let { name, value } = e.currentTarget
    let { localUserInfo } = this.state

    if (name === 'aka') {
      value = value.includes(',') ? value.split(',') : [value]
    }

    localUserInfo[name] = value
    this.setState({ localUserInfo, changeInFormState: true })
  }
  initializeFormState = initialData => {
    let { localUserInfo } = this.state
    const fields = [
      'first_name',
      'last_name',
      'aka',
      'dob',
      'email',
      'phone',
      'created_at',
      'clinic',
      'dl',
    ]
    fields.forEach(field => {
      localUserInfo[field] = initialData[field]
    })
    this.setState({ localUserInfo })
  }
  render() {
    let { editing, btnText, localUserInfo } = this.state
    return (
      <div className="user-card--container">
        <UserNameItems
          localUserInfo={localUserInfo}
          editHandler={this.editHandler}
          toggleEditMode={this.toggleEditMode}
          btnText={btnText}
          editing={editing}
        />
        <UserInfoItems
          localUserInfo={localUserInfo}
          editHandler={this.editHandler}
          editing={editing}
        />
      </div>
    )
  }
}

export default Card
