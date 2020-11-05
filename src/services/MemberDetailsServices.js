import {TASKS, PROFILE_DATA} from '../constants/AppConstants';

const TASKS_COUNT = {
  '1': 12,
  '2': 43,
  '3': 45,
  '4': 23,
  '5': 89,
  '6': 22,
  '7': 13,
};

export const getTasksCount = (id) => {
  return TASKS_COUNT[id];
};

export const getTasks = (id) => {
  return TASKS;
};

export const getProfileData = (id) => {
  return PROFILE_DATA[id];
};
