
/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Mounts a React component.
         * @param component - The React component to mount.
         * @param options - Additional options for mounting.
         */
        mount(component: JSX.Element, options?: MountOptions): Chainable<Subject>;
    }
}