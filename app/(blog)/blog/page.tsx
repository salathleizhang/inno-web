import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { findLatestPosts } from '~/utils/posts';

import CallToAction from '~/components/widgets/CallToAction';
import { callToActionServices } from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header>
          <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
            News
          </h1>
        </header>
        <div className="grid grid-cols-1 gap-6 p-4 md:p-0 max-w-2xl mx-auto">
        {posts.map(({ slug, title, image }: { slug: string, title: string, image?: string }) => (
  <Link key={slug} href={`/${slug}`} className="group">
    <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white transition-all duration-200 ease-in-out hover:bg-gray-50">
      <div className="w-1/3 flex-shrink-0">
        {image && typeof image === 'string' && image.trim() !== '' ? (
          <Image 
            width={200} 
            height={120} 
            alt={title} 
            src={image.startsWith('/') || image.startsWith('http') ? image : `/${image}`}
            className="h-full w-full object-cover rounded-l-lg"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 rounded-l-lg"></div>
        )}
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{title}</h2>
      </div>
    </div>
  </Link>
))}
        </div>
      </section>
      <CallToAction {...callToActionServices} />
    </>
  );
}