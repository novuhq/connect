import PropTypes from 'prop-types';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'localhost:3000';

const DEFAULT_TITLE = 'ConnectNovu';
const DEFAULT_DESCRIPTION =
  'The ultimate library for managing multi-channel transactional notifications with a single API.';
const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

const fontsBasePath = '/fonts/brother-1816';

const fontsPaths = [
  '/brother-1816-light.woff2',
  '/brother-1816-regular.woff2',
  '/brother-1816-medium.woff2',
  '/brother-1816-bold.woff2',
];

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imagePath = DEFAULT_IMAGE_PATH,
}) => {
  const currentImagePath = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/favicon/favicon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/favicon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="apple-touch-icon" sizes="256x256" href="/favicon/favicon-256x256.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/favicon/favicon-384x384.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/favicon/favicon-512x512.png" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" crossOrigin="anonymous" />

      {fontsPaths.map((fontPath, index) => (
        <link
          rel="preload"
          href={`${fontsBasePath}${fontPath}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key={index}
        />
      ))}
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
};

export default SEO;
