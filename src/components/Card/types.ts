import type {PropsWithChildren} from 'react';

export type CardProps = PropsWithChildren<{
  title: string;
  description: string;
  toDo: boolean;
  imageURL?: string;
}>;
