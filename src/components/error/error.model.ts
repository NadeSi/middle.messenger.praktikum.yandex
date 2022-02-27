import LinkComponent from '../common/link';

export interface IErrorProps {
  statusCode: string;
  text: string;
  link?: LinkComponent;
}
