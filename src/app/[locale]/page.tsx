import { Button } from '#/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Link } from '#/navigation';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>JLPT Mock Exams - Ace Your Japanese Language Test</title>
        <meta
          name="description"
          content="Prepare for the JLPT with our comprehensive mock exams, designed to boost your confidence and maximize your scores."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-indigo-600">
            Ace the JLPT
          </h1>
          <p className="text-lg text-gray-600">
            Practice with real-time mock exams and get ready to excel.
          </p>
        </header>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Why Our Mock Exams?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our practice exams are tailored to mimic the JLPT format and
                difficulty. Get instant feedback and insights to improve your
                score.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Realistic Exam Experience',
                description:
                  'Timed exams with the same structure as the JLPT, designed to help you adapt to the test format.',
              },
              {
                title: 'Detailed Analysis',
                description:
                  'Review your answers with explanations and get insights into your strengths and weaknesses.',
              },
              {
                title: 'Progress Tracking',
                description:
                  'Monitor your progress over time and see how close you are to your target score.',
              },
              {
                title: 'Flexible Practice Modes',
                description:
                  'Practice by section or take a full-length test. Learn at your own pace.',
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-indigo-50">
                <CardContent>
                  <h3 className="mb-2 text-xl font-medium text-indigo-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-600">
            Get Started Today
          </h2>
          <p className="mb-6 text-gray-600">
            Sign up now and get access to our complete JLPT mock test library.
          </p>
          <Button className="rounded-lg bg-indigo-600 font-semibold shadow-md hover:bg-indigo-700">
            <Link href={'/free-tests'}>Sign Up for Free</Link>
          </Button>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
          <p>&copy; 2024 JLPT Mock Exams. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
