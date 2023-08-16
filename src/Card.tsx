import * as React from 'react';
import { DataResult } from './type';

const Card = ({ children }) => <div className="card">{children}</div>;

const Title = ({ children }) => <div className="card__title">{children}</div>;

const Text = ({ children }) => <div className="card__text">{children}</div>;

const Link = ({ children }) => <div className="card__link">{children}</div>;

Card.Title = Title;
Card.Text = Text;
Card.Link = Link;

export default Card;
