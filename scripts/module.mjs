
/**
 * Main Module Organizational Tools
 */
//import { MyLogger } from './my-logger.js';

/**
 * Sub Modules
 */
import { Welcome } from './modules/welcome.mjs'

export class MODULE {

  static SUB_MODULES = {
    Welcome,
  };

  static build() {

    /**
     * Initialize all Sub Modules
     */
    Hooks.on(`setup`, () => {
      Object.values(MODULE.SUB_MODULES).forEach(cl => cl.register());
    });
  }
}



/*
  Initialize Module
*/
MODULE.build();

