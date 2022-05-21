import * as React from 'react';

import { PageWrapper } from '@/components';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div>
            <h1>Page Not Found</h1>
            <div>Back to Home</div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
