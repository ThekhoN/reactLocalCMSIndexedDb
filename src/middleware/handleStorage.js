const handleStorage = store => next => action => {
  console.group('logger');
  console.log('currentState: ', store.getState());
  console.log('action: ', action)
  next(action);
  console.log('updatedState: ', store.getState())
  console.groupEnd('logger');
}

export default logger
