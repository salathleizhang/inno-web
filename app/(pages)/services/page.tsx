import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import Features3 from '~/components/widgets/Features3';


import { heroContact } from '~/shared/data/pages/contact.data'

import {
  features3About,
} from '~/shared/data/pages/about.data';




import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  heroServices,
  testimonialsServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Features4 {...features4Services} />
      {/* <Hero {...heroServices} /> */}
      <Features3 {...features3About} />
      <Features2 {...features2Services} />
      {/* <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} /> */}
      {/* <Testimonials {...testimonialsServices} /> */}
      <Hero {...heroContact} />
      <CallToAction {...callToActionServices} />

    </>
  );
};

export default Page;
