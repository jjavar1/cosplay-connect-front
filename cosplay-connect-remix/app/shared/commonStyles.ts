// app/styles/common.ts
export const styles = {
  layout: {
    page: "min-h-screen relative",
    mainContent: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  },
  containers: {
    card: "bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20",
    section: "py-12 sm:py-16"
  },
  typography: {
    title: "text-4xl font-bold text-white mb-2 drop-shadow-lg",
    subtitle: "text-indigo-100 text-lg",
    heading: "text-2xl font-bold text-gray-900",
    text: "text-gray-600"
  },
  buttons: {
    primary: `px-6 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:from-indigo-600 hover:to-purple-600
              transition-all duration-200 transform hover:scale-[1.02]
              shadow-md hover:shadow-lg
              disabled:opacity-50 disabled:cursor-not-allowed`,
    secondary: `px-6 py-3 rounded-xl font-semibold text-indigo-600 
                border-2 border-indigo-500 hover:bg-indigo-50
                transition-all duration-200 transform hover:scale-[1.02]
                disabled:opacity-50 disabled:cursor-not-allowed`
  }
} as const;