// app/components/PageLayout.tsx
import { ReactNode } from 'react';
import { useMatches } from '@remix-run/react';

interface PageLayoutProps {
  children: ReactNode;
  background?: boolean;
}

// Common styles as constants
const styles = {
  layout: {
    page: "min-h-screen relative",
    mainContent: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }
};

const PageLayout = ({ children, background = true }: PageLayoutProps) => {
  // Can be used to check current route info if needed
  const matches = useMatches();

  return (
    <div className={styles.layout.page}>
      {background && (
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]" />
            {/* Optional dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      )}
      <div className={styles.layout.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;