import {Dispatch, SetStateAction} from 'react';
import {Task} from '../../types/types';

export type AddTaskFormProps = {
  setTaskList: Dispatch<SetStateAction<Task[]>>;
};
