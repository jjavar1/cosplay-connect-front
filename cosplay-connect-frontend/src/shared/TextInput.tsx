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
    <div className="space-y-2 mb-6">
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
                 border border-gray-300 rounded-lg focus:outline-none 
                 focus:border-indigo-500 transition-colors"
      />
    </div>
  );
};

export default TextInput;