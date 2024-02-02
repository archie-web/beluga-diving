import { ErrorMessage } from './ErrorMessage';
import { containerStyle, checkboxStyle, checkmarkStyle } from './Checkbox';

export const RadioButton = ({
    isRequired,
    className = '',
    errorText,
    register,
    name,
    children,
    ...props
}) => (
    <div className={`group mb-4 w-full lg:mb-8 ${className}`}>
        <label className={`radio-button ${containerStyle}`}>
            <input
                type="radio"
                className={checkboxStyle}
                {...register(name)}
                {...props}
            />
            <span
                className={`flex items-center justify-center rounded-full ${checkmarkStyle}`}
            />
            <span>{children}</span>
        </label>
        {errorText && <ErrorMessage>{errorText.message}</ErrorMessage>}
    </div>
);
