import clsx from 'clsx';
import * as React from 'react';

enum ButtonVariant {
	'primary',
	'outline',
	'ghost',
	'light',
	'dark',
}

type ButtonProps = {
	isLoading?: boolean;
	isDarkBg?: boolean;
	variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			disabled: buttonDisabled,
			isLoading,
			variant = 'primary',
			isDarkBg = false,
			...rest
		},
		ref
	) => {
		const disabled = isLoading || buttonDisabled;

		return (
			<div
				data-content={children}
				className={clsx(
					'relative inline-flex cursor-pointer overflow-hidden border border-primary bg-background px-6 py-2 text-primary',
					'hover:bg-primary hover:text-background'
				)}
			>
				<button className="">{children}</button>
			</div>
		);
	}
);

export default Button;
