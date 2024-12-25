export const buttonStyles = {
    base: "px-6 py-3 rounded-xl transition-all duration-200 font-semibold",
    primary: "bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm hover:shadow-md",
    secondary: "bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200",
    chip: "px-4 py-2 rounded-xl transition-all duration-200 font-semibold",
    chipSelected: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm",
    chipUnselected: "bg-white border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600"
  };
  
  export const containerStyles = {
    page: "min-h-screen relative",
    mainContent: "max-w-4xl mx-auto px-4",
    section: "mb-12",
    card: "bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20"
  };

  export const textStyles = {
    h1: "text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    h2: "text-2xl font-semibold text-indigo-900 mb-6",
    sectionTitle: "text-lg text-indigo-600 font-medium mb-4",
    label: "text-sm font-semibold text-indigo-700 bg-white px-2 relative z-10"
  };
  
  export const inputStyles = {
    base: "w-full px-4 py-3.5 text-gray-800 border-2 border-gray-200 rounded-xl " +
          "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none " +
          "transition-all duration-200 placeholder:text-gray-400 bg-white font-medium",
    file: "block w-full text-sm text-gray-700 font-medium " +
          "file:mr-4 file:py-2.5 file:px-4 file:rounded-xl " +
          "file:border-0 file:text-sm file:font-semibold " +
          "file:bg-gradient-to-r file:from-indigo-500 file:to-purple-500 file:text-white " +
          "hover:file:from-indigo-600 hover:file:to-purple-600 cursor-pointer " +
          "border border-gray-200 rounded-xl bg-white"
  };