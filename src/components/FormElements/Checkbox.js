import { ErrorMessage } from './ErrorMessage';

export const containerStyle =
    'group relative flex cursor-pointer items-center text-lg text-white';

export const checkboxStyle =
    'absolue peer inset-0 h-0 w-0 cursor-pointer opacity-0';

export const checkmarkStyle =
    'checkmark mr-3 h-6 w-6 border border-white transition-all group-hover:border-primaryColour group-hover:bg-white/20 peer-checked:after:block';

export const Checkbox = ({
    isRequired,
    className = '',
    errorText,
    register,
    name,
    children,
    ...props
}) => (
    <div className={`group mb-4 w-full lg:mb-8 ${className}`}>
        <label className={`checkbox ${containerStyle}`}>
            <input
                type="checkbox"
                className={checkboxStyle}
                {...register(name)}
                {...props}
            />
            <span className={`relative ${checkmarkStyle}`} />
            <span>{children}</span>
        </label>
        {errorText && <ErrorMessage>{errorText.message}</ErrorMessage>}
    </div>
);
