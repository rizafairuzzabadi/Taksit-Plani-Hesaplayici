import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import UserContext from '../../context/userdatacontext';

const Input = forwardRef((props, ref) => {
    // const activate = () => {
    //     inputRef.current.focus(); // focus on input
    // };

    // useImperativeHandle(ref, () => {
    //     return {
    //         focus: activate
    //     }
    // });

    return(
        <React.Fragment>
            <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                {props.label}
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                ref = {ref}
                value={props.value}
                onChange={props.onChange}
            />
        </React.Fragment>
    );
});

export default Input;