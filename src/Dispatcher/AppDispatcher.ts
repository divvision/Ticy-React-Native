import Dispatcher from './Dispatcher'

export class AppDispatcher extends Dispatcher {
  handleViewAction(action:Object):void {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    }) 
  }
}

export default new AppDispatcher()
