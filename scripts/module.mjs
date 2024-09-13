
/**
 * Main Module Organizational Tools
 */

/**
 * Sub Modules
 */

export class MODULE {

  static SUB_MODULES = {
  };

  static build() {

    /**
     * Initialize all Sub Modules
     */
    Hooks.on(`setup`, () => {
      console.log('Initializing Fire Cat');
      Object.values(MODULE.SUB_MODULES).forEach(cl => cl.register());
    });
  }
}



/*
  Initialize Module
*/
MODULE.build();

