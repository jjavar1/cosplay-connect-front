import { styles } from "../shared/commonStyles";

import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  background?: boolean;
}

const PageLayout = ({ children, background = true }: PageLayoutProps) => (
    <div className={styles.layout.page}>
      {background && (
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
            <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]" />
          </div>
        </div>
      )}
      <div className={styles.layout.mainContent}>
        {children}
      </div>
    </div>
  );

  export default PageLayout;