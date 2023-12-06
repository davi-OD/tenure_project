import React from 'react';
import { UserIcon } from '@heroicons/react/outline';

interface IconInputProps {
    icon: React.ElementType;
    placeholder: string;
    [key: string]: any; // Allow any other props
}

const IconInput: React.FC<IconInputProps> = ({ icon: Icon, placeholder, ...rest }) => {
    return (
        <div className="relative">
            <input
                {...rest}
                className="border rounded w-full py-2 pl-10 pr-4 text-gray-700"
                placeholder={placeholder}
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon className="w-5 h-5 text-gray-400" />
            </span>
        </div>
    );
};