// Libraries
import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input() {
    return (
        <div className="relative bg-white">
            <h3>Text Fields</h3>
            <p className="text-sm">The TextField wrapper component is a complete form control including a label, input and help text.</p>
            <div className="flex flex-row">
                <div className="pr-5 py-5" >
                    <TextField
                        required={true}
                        label="Required"
                        defaultValue="Hello World"
                    />
                </div>
                <div className="pr-5 py-5" >
                    <TextField
                        disabled={true}
                        label="Required"
                        defaultValue="Hello World"
                    />
                </div>
                <div className="pr-5 py-5" >
                    <TextField
                        label="Password"
                        type="password"
                        defaultValue="Hello World"
                    />
                </div>
                <div className="pr-5 py-5" >
                    <TextField
                        aria-readonly={true}
                        label="Password"
                        defaultValue="Hello World"
                    />
                </div>
            </div>
        </div>
    );
}

export default Input;
