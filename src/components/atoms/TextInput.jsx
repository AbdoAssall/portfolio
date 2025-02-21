// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', placeholder = '', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'px-4 pt-1 rounded-xl border border-gray-100 text-white h-11 shadow-sm placeholder:text-white focus:bg-white focus:text-gray-600 focus:placeholder:text-gray-600 focus:border-white focus:ring-0 focus:outline-0 transition-all duration-300 ease-in-out ' +
                className
            }
            ref={localRef}
            placeholder={placeholder}
        />
    );
});