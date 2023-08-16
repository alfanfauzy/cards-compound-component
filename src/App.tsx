import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import './style.css';
import { DataResult, ResponseData } from './type';
import { mapperData } from './utils/MapperData';

const fetchApi = async (): Promise<ResponseData[]> => {
  const fetchData = await fetch(
    'https://my-json-server.typicode.com/savayer/demo/posts'
  );

  const response: ResponseData[] = await fetchData.json();

  return response;
};

const App = () => {
  const [cards, setCards] = useState<Array<DataResult>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi().then((response: ResponseData[]) => {
      const mapData = mapperData(response);

      setCards(mapData);
      setLoading(false);
    });
  }, []);

  const analyticsTrackClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    const targetElement = event.currentTarget as HTMLAnchorElement;
    const url = targetElement.href;
    console.log(url);
  };

  if (loading) {
    return <p>Loading Data. . .</p>;
  }

  return (
    <div>
      {cards?.map(function (item) {
        return (
          <Card key={item.id}>
            <Card.Title><h4>{item.title}</h4></Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Card.Link>
              <a
                className={`default-link card__link ${item.linkClassName}`}
                target={item.target}
                rel={item.title}
                href={item.href}
                onClick={analyticsTrackClick}
              >
                {item.linkTitle}
              </a>
            </Card.Link>
          </Card>
        );
      })}
    </div>
  );
};

export default App;
