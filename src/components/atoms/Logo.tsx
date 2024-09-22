import Image from 'next/image';
import Link from 'next/link';
import logoLight from '~/assets/images/logo-light.png';
import logoDark from '~/assets/images/logo-dark.png';

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src={logoLight}
        alt="Site Logo"
        width={150}
        height={50}
        className="w-auto dark:hidden"
      />
      <Image
        src={logoDark}
        alt="Site Logo"
        width={150}
        height={50}
        className="hidden w-auto dark:block"
      />
    </Link>
  );
};

export default Logo;