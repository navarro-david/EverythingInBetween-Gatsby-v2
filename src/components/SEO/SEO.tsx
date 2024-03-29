import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { HelmetProps } from 'react-helmet';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'];
  title?: string;
  imageUrl?: string;
}

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en',
  meta = [],
  title = 'Everything in Between Podcast',
  imageUrl,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const image =
    imageUrl ||
    'https://res.cloudinary.com/dnavdeej/image/upload/v1565468211/EIBart_djxrcj.jpg';

  const defaultMeta = [
    { name: 'copyright', content: 'David Navarro' },
    { name: `description`, content: metaDescription },
    { name: 'og:type', content: 'website' },
    { property: 'og:site_name', content: `Everything In Between Podcast` },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { property: 'og:url', content: 'https://www.dnavdeej.com' },
    { property: 'og:image', content: image },
    { property: 'og:locale', content: `en_US` },
    { name: `twitter:title`, content: title },
    { name: `twitter:card`, content: 'summary' },
    { name: `twitter:creator`, content: site.siteMetadata.author },
    { name: `twitter:description`, content: metaDescription },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: '@dnavdeej' },
    { name: 'apple-itunes-app', content: 'app-id=1347633418' },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[...defaultMeta, ...meta].filter(Boolean)}
    />
  );
};

export default SEO;
