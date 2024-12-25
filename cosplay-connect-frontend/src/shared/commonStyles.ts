// styles/commonStyles.ts
export const styles = {
    layout: {
      page: "min-h-screen relative",
      mainContent: "relative z-10 space-y-8 pt-8 pb-12 max-w-4xl mx-auto px-4",
      card: "bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20",
    },
    headings: {
      title: "text-4xl font-bold text-white mb-2 drop-shadow-lg text-center",
      subtitle: "text-indigo-100 text-lg text-center",
      sectionTitle: "text-lg font-semibold text-indigo-900 flex items-center gap-2",
    },
    buttons: {
      base: "transition-all duration-200 transform hover:scale-[1.02]",
      card: "p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
      primary: "px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg",
      secondary: "px-8 py-3 rounded-xl font-semibold text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-50",
    },
    inputs: {
      base: "mt-2 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 bg-white/50",
    },
    sections: {
      wrapper: "space-y-6 pb-8 border-b border-gray-200",
      iconWrapper: "p-3 bg-indigo-50 rounded-xl",
      icon: "w-8 h-8 text-indigo-600",
    }
  };