import PageLayout from '../layout/PageLayout'

interface NotFoundPageProps {
  onNavigate: (path: string) => void
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <PageLayout
      onNavigate={onNavigate}
      heroEyebrow="404 Error"
      heroTitle="Page Not Found"
      heroDescription="The page you requested does not exist or has been moved within the ScaleOnIt ONIT platform."
    >
      <section className="py-20 bg-white text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="text-6xl font-extrabold text-onit mb-4">404</div>
          <p className="text-sm text-mid-text mb-8">
            Please check the URL or return to the platform overview to explore our 11 connected capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('/')}
              className="bg-onit text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-onit-hover transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
            <button
              onClick={() => onNavigate('/platform')}
              className="border border-border-base text-midnight text-sm font-semibold px-6 py-3 rounded-xl hover:bg-pearl transition-colors cursor-pointer"
            >
              Explore Platform Hub
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
