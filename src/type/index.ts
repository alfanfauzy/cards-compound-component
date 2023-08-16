export type ResponseData = {
  id: number;
  title: {
    en: string;
    id: string;
  };
  body?: {
    en: string;
    id: string;
  };
  link_title: string;
  link: string;
};

export type DataResult = {
  id: number;
  title: string;
  linkTitle: string;
  href: string;
  text: string;
  linkClassName: string;
  target: string;
};
