import { transitionEffect } from '@components/helpers/animateStyle';
import { baseInputStyle, baseLabelStyle } from './Input';
import { ErrorMessage } from './ErrorMessage';

export const Select = ({
    isRequired,
    name = '',
    className = '',
    children,
    errorText,
    register,
    label,
    ...props
}) => {
    return (
        <div className={`group mb-4 w-full lg:mb-8 ${className}`}>
            <div
                className={`border-grey text-grey relative mb-4 block border-b hover:border-white focus:border-white lg:mb-8 ${transitionEffect}`}
            >
                <label className={baseLabelStyle}>{`${label} ${
                    isRequired ? '*' : ''
                }`}</label>

                <select
                    name={name}
                    className={`${baseInputStyle} relative z-10 cursor-pointer truncate py-4 pr-8`}
                    {...register(name, { required: isRequired })}
                    required={isRequired}
                    {...props}
                >
                    {children}
                </select>
                <svg
                    className="text-grey absolute right-2 lg:right-4 top-1/2 z-0 h-8 w-8 group-hover:text-maxYellow"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {/* {errorText && <ErrorMessage>This field is required</ErrorMessage>} */}
            <ErrorMessage className={name}>This field is required</ErrorMessage>
        </div>
    );
};
