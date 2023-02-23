import {Dispatch, SetStateAction} from 'react';
import {Task} from '../../types/types';

export type AddTaskFormProps = {
  taskList: Task[];
  setTaskList: Dispatch<SetStateAction<Task[]>>;
};
