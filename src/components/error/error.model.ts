import LinkComponent from '../link';

export interface IErrorProps {
  statusCode: string;
  text: string;
  link?: LinkComponent;
}
