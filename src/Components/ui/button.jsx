import React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center cursor-pointer justify-center rounded px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-teal-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 !p-2',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700'
  };
  return (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  );
});
