import { Suspense } from 'react'
import { Loading } from '@/components/ui/loading'
import { DisplayJson } from '@/components/display-json'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <DisplayJson />
      </Suspense>
    </main>
  );
}
