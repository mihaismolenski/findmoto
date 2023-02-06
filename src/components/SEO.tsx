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
      <meta name="author" content="FindYourMotorcycle dev team" />
    </Helmet>
  );
};

export default SEO;
