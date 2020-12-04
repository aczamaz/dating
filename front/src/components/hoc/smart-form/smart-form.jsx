import React, { Component } from 'react';
export const SmartForm = (Wtaper, checks = undefined) => {
    return class extends Component {
        state = {
            values: {},
            errors: {}
        };
        checkAllFields = () => {
            const values = this.state.values;
            let newRrrors = {};
            for (const key in checks) {
                const error = this.checkValue({ name: key, value: values[key] });
                if (error) {
                    newRrrors[key] = error;
                }
            }
            this.setState({ errors: newRrrors });
            return Object.keys(newRrrors).length;
        };
        handle = (e,func) => {
            e.preventDefault();
            if (this.checkAllFields()) return false;
            const { values } = this.state;
            func(values);
        };
        getTargetProps = (target) => {
            const { type, name } = target;
            const value = type === "file" ? target.files : target.value;
            return { name, value };
        };
        smartCheckValue = (target, checker) => {
            const { name, value } = this.getTargetProps(target);
            const values = { ...this.state.values, [name]: value };
            return checker(value, values);
        };
        checkValue = (target) => {
            if (!checks) return false;
            const { name, value } = this.getTargetProps(target);
            const checksArray = checks[name];
            if (!checksArray) return false;
            for (let i = 0; i < checksArray.length; i++) {
                const typeFunct = checksArray[i].length;
                if (typeFunct === 1) {
                    let resultCheck = checksArray[i](value);
                    if (resultCheck) return resultCheck;
                }
                if (typeFunct === 2) {
                    let resultCheck = this.smartCheckValue(target, checksArray[i]);
                    if (resultCheck) return resultCheck;
                }
            }
            return false;
        };
        setValue = ({ target }) => {
            const { name, value } = this.getTargetProps(target);
            const error = this.checkValue(target);
            this.setState(({ values, errors }) => {
                const newValues = { ...values, [name]: value };
                const newErrors = { ...errors, [name]: error };
                return {
                    values: newValues,
                    errors: newErrors
                };
            });
        };
        render() {
            return (
                <Wtaper
                    {...this.props}
                    errors={this.state.errors}
                    setValue={this.setValue}
                    onSend={this.handle}
                />
            );
        }
    };
};

