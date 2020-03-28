/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK'



/*
 * action creators
 */

export function addTask(title, description) {
  return { type: ADD_TASK, title, description }
}
