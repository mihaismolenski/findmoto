import { Helmet } from "react-helmet";

export interface SeoProps {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
