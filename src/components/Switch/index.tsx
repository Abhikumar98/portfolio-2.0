interface ISwitch {
	readonly enabled: boolean;
	readonly onChange: (enabled: boolean) => void;
}

import React from 'react';

const Switch: React.FC<ISwitch> = ({ enabled, onChange }) => {
	return (
		<div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-5">
			<div className="relative mt-5 flex self-center rounded-lg border border-gray-200 bg-white p-1.5 shadow sm:mt-0">
				<button
					type="button"
					onClick={() => onChange(false)}
					className={`relative ml-0.5 whitespace-nowrap rounded-lg border border-transparent py-1 px-3 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-0 ${
						enabled === false
							? 'border-indigo-600 bg-indigo-600'
							: ''
					}`}
				>
					<svg
						className={`h-5 w-5 ${
							enabled === false ? 'text-white' : 'text-gray-700'
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</button>

				<button
					type="button"
					onClick={() => onChange(true)}
					className={`relative whitespace-nowrap rounded-lg py-1.5 px-3 text-sm font-medium text-white shadow-sm focus:z-10 focus:outline-none focus:ring-0 ${
						enabled === true
							? 'border-indigo-600 bg-indigo-600'
							: ''
					}`}
				>
					<svg
						className={`h-5 w-5 ${
							enabled === true ? 'text-white' : 'text-gray-700'
						}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Switch;
