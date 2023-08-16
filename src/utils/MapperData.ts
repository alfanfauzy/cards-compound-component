import { DataResult, ResponseData } from '../type';

export const mapperData = (responses: Array<ResponseData>): Array<DataResult> =>
  responses.map((data) => ({
    title: data.title.id,
    href: data.link,
    id: data.id,
    linkClassName: data.id === 1 ? 'card__link--red' : '',
    linkTitle: data.link_title,
    target: data.id === 1 ? '_blank' : '_self',
    text: data.body?.id,
  }));
