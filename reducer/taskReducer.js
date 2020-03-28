import {ADD_TASK} from '../actions/taskActions';

const initialState = {
    tasks: []
  }

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
        debugger;
      const tasks = state.tasks.slice();
      tasks.push({title: action.title, description: action.description});
      return {
        ...state,
        tasks: tasks,
      };
    default:
      return state;
  }
}
