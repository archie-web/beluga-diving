interface Props {
    children: any;
    className?: string;
    spacing?: 'lg' | 'md' | 'sm' | undefined;
}

export const VStack = ({ children, className = '', spacing = 'md' }: Props) => {
    function switchValue(value: any) {
        switch (value) {
            case 'lg':
                return 'space-y-8';
            case 'md':
                return 'space-y-4';
            case 'sm':
                return 'space-y-2';
            default:
                'space-y-4';
        }
    }

    return (
        <div className={`flex flex-col ${switchValue(spacing)} ${className}`}>
            {children}
        </div>
    );
};
