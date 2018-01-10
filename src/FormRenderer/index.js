import React from 'react';
export default class FormRenderer extends React.Component {
  render() {
    let {label, help, required, description, children, validating, error, decorator} = this.props;
    let className = error?'error':'success';
    return (
      <div className="form-renderer">
        <label className={`label ${required?'required':''}`}>{label}</label>
        <div className="decorator">
          {
            React.cloneElement(children, {className: `input ${className}`})
          }
          <div className="error-text">{error}</div>
        </div>

        {/*decorator?decorator(children):children*/}

        {validating && 'validating……'}
      </div>
    );
  }
}
