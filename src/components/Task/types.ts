import type {PropsWithChildren} from 'react';

export type TaskProps = PropsWithChildren<{
  title: string;
  description: string;
  toDo: boolean;
}>;
