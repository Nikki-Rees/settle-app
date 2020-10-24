import React from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';

export default function ConditionDropdown() {
    return (


        <FormGroup>

            <CustomInput type="select" id="feature_condition" name="feature_condition">
                <option value="">Select condition</option>

                <option>Excellent</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Poor</option>
                <option>Requires replacement</option>

            </CustomInput>
        </FormGroup>
    );
}