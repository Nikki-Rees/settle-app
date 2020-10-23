import React from "react";
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="4" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}


export function Checkboxes(props) {
  return (

    <div>
      <CustomInput {...props} type="checkbox" id="CustomCheckbox" />
    </div>

  );
}

export function Switches(props) {
  return (

    <div>
      <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />

    </div>

  );
}


export function CustomSelect(props) {
  return (

    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
      <option value="">Select</option>
      <option></option>

    </CustomInput>

  );
}

export function FileBrowser(props) {
  return (

    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />

  );
}

