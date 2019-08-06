import React from 'react'

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus()
    }
  }

  render() {
    let error
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>
    }

    let warning
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>
    }
    let input
    if (this.props.type === 'textarea') {
      input = (
        <textarea
          {...this.props.input}
          {...this.props}
          id={this.props.input.name}
          type={this.props.type}
          className="form-input-textarea"
          ref={input => (this.input = input)}
        />
      )
    } else if (this.props.type === 'date') {
      input = (
        <input
          {...this.props.input}
          {...this.props}
          id={this.props.input.name}
          type={this.props.type}
          className="form-input disabled-date"
          ref={input => (this.input = input)}
        />
      )
    } else {
      input = (
        <input
          {...this.props.input}
          {...this.props}
          id={this.props.input.name}
          type={this.props.type}
          className="form-input"
          ref={input => (this.input = input)}
        />
      )
    }
    return (
      <div className="form-input-field">
        <div>
          <label htmlFor={this.props.input.name}>
            {this.props.label}
            {error}
            {warning}
          </label>
        </div>
        {input}
      </div>
    )
  }
}
