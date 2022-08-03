export class Welcome {

  static EV = {
    TOAST: 'toast',
  }

  static register() {
    //all initialization tasks after warpgate is ready
    Hooks.on('ready', () => {
      Welcome.events();
      Welcome.globals();
    });
  }

  static events() {
    warpgate.event.watch(Welcome.EV.TOAST, Welcome.handleToast, Welcome.checkUser);
  }

  /* just stuff our functions inside warpgate, badgers like treats */
  static globals() {
    warpgate.firecat = {
      toast: Welcome.toast
    }
  }

  /**
   * Send a toast to selected users at indicated level
   * @param {string} msg The message to display
   * @param {object} [options] Additional options to customize display
   * @param {string} [options.type='info'] Type of notification: `info`, `warn`, `error`, maybe others
   * @param {Array<string>} [options.userIds=[]] List of user IDs for which to display the toast. Empty list for all.
   */
  static async toast(msg, {type = 'info', userIds = []} = {}) {
    await warpgate.event.notify(Welcome.EV.TOAST, {msg, type, userIds})
  }

  /**
   * @param {Array<string>} eventData.userIds
   */
  static checkUser(eventData) {
    if (eventData.userIds.length == 0) return true;
    return eventData.userIds.includes(game.userId);
  }

  static handleToast(eventData) {
    ui.notifications[eventData.type](eventData.msg); 
  }

}
