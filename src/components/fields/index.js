import React from "react";
import cx from "classnames";
import { Field } from "redux-form";
// import ReactJson from "react-json-view";

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return "async-validating";
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return "invalid";
  }
  if (meta.touched && meta.valid) {
    return "valid";
  }
};

export const customInput = props => {
  const { label, input, type, meta, autoFocus } = props;
  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} autoFocus={autoFocus} />
      <label>{label}</label>
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
      {/* <ReactJson src={props} /> */}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label} </label>
      <select {...props.input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
      {/* <ReactJson src={props} /> */}
    </div>
  );
};

export const discounts = ({ fields }) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button type="button" onClick={() => fields.remove(index)}>
          &times;
        </button>
      </div>
    ))}
    <button type="button" onClick={() => fields.push()}>
      Add {!fields.length ? "Discount Code" : "Another Discount Code"}
    </button>
  </div>
);
