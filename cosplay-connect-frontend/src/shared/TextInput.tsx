import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "Write here..."
}) => {
  return (
    <div className="space-y-2">
      <label 
        className="block text-[90%] text-indigo-600 font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-gray-600 bg-white 
        border border-indigo-500 rounded-lg 
        focus:outline-none focus:border-indigo-500
        focus:ring-4 focus:ring-indigo-300
        focus:ring-opacity-100
        shadow-sm
        focus:shadow-[0_0_20px_rgba(99,102,241,0.4)]
        transition-all duration-200"
      />
    </div>
  );
};

export default TextInput;