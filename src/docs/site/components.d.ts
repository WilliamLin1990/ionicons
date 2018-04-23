/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  MatchResults,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface FooterBar {

    }
  }

  interface HTMLFooterBarElement extends StencilComponents.FooterBar, HTMLStencilElement {}

  var HTMLFooterBarElement: {
    prototype: HTMLFooterBarElement;
    new (): HTMLFooterBarElement;
  };
  interface HTMLElementTagNameMap {
    'footer-bar': HTMLFooterBarElement;
  }
  interface ElementTagNameMap {
    'footer-bar': HTMLFooterBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'footer-bar': JSXElements.FooterBarAttributes;
    }
  }
  namespace JSXElements {
    export interface FooterBarAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface HeaderBar {
      'isSearchVisible': boolean;
      'query': string;
    }
  }

  interface HTMLHeaderBarElement extends StencilComponents.HeaderBar, HTMLStencilElement {}

  var HTMLHeaderBarElement: {
    prototype: HTMLHeaderBarElement;
    new (): HTMLHeaderBarElement;
  };
  interface HTMLElementTagNameMap {
    'header-bar': HTMLHeaderBarElement;
  }
  interface ElementTagNameMap {
    'header-bar': HTMLHeaderBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'header-bar': JSXElements.HeaderBarAttributes;
    }
  }
  namespace JSXElements {
    export interface HeaderBarAttributes extends HTMLAttributes {
      'isSearchVisible'?: boolean;
      'onToggleHeaderSearch'?: (event: CustomEvent) => void;
      'query'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface IconList {
      'query': string;
    }
  }

  interface HTMLIconListElement extends StencilComponents.IconList, HTMLStencilElement {}

  var HTMLIconListElement: {
    prototype: HTMLIconListElement;
    new (): HTMLIconListElement;
  };
  interface HTMLElementTagNameMap {
    'icon-list': HTMLIconListElement;
  }
  interface ElementTagNameMap {
    'icon-list': HTMLIconListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'icon-list': JSXElements.IconListAttributes;
    }
  }
  namespace JSXElements {
    export interface IconListAttributes extends HTMLAttributes {
      'query'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface IconSearch {
      'autofocus': string;
      'query': string;
      'size': string;
    }
  }

  interface HTMLIconSearchElement extends StencilComponents.IconSearch, HTMLStencilElement {}

  var HTMLIconSearchElement: {
    prototype: HTMLIconSearchElement;
    new (): HTMLIconSearchElement;
  };
  interface HTMLElementTagNameMap {
    'icon-search': HTMLIconSearchElement;
  }
  interface ElementTagNameMap {
    'icon-search': HTMLIconSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'icon-search': JSXElements.IconSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface IconSearchAttributes extends HTMLAttributes {
      'autofocus'?: string;
      'onHasSearched'?: (event: CustomEvent) => void;
      'query'?: string;
      'size'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface IoniconsSite {

    }
  }

  interface HTMLIoniconsSiteElement extends StencilComponents.IoniconsSite, HTMLStencilElement {}

  var HTMLIoniconsSiteElement: {
    prototype: HTMLIoniconsSiteElement;
    new (): HTMLIoniconsSiteElement;
  };
  interface HTMLElementTagNameMap {
    'ionicons-site': HTMLIoniconsSiteElement;
  }
  interface ElementTagNameMap {
    'ionicons-site': HTMLIoniconsSiteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ionicons-site': JSXElements.IoniconsSiteAttributes;
    }
  }
  namespace JSXElements {
    export interface IoniconsSiteAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LandingPage {
      'query': string;
    }
  }

  interface HTMLLandingPageElement extends StencilComponents.LandingPage, HTMLStencilElement {}

  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };
  interface HTMLElementTagNameMap {
    'landing-page': HTMLLandingPageElement;
  }
  interface ElementTagNameMap {
    'landing-page': HTMLLandingPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'landing-page': JSXElements.LandingPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LandingPageAttributes extends HTMLAttributes {
      'query'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ToastBar {
      'selectedIcon': {
    name: string,
    icons: Array<string>,
    tags: Array<string>
  };
      'selectedIconType': string;
    }
  }

  interface HTMLToastBarElement extends StencilComponents.ToastBar, HTMLStencilElement {}

  var HTMLToastBarElement: {
    prototype: HTMLToastBarElement;
    new (): HTMLToastBarElement;
  };
  interface HTMLElementTagNameMap {
    'toast-bar': HTMLToastBarElement;
  }
  interface ElementTagNameMap {
    'toast-bar': HTMLToastBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'toast-bar': JSXElements.ToastBarAttributes;
    }
  }
  namespace JSXElements {
    export interface ToastBarAttributes extends HTMLAttributes {
      'onClearToast'?: (event: CustomEvent) => void;
      'onToggleHeaderSearch'?: (event: CustomEvent) => void;
      'selectedIcon'?: {
    name: string,
    icons: Array<string>,
    tags: Array<string>
  };
      'selectedIconType'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface UsagePage {
      'match': MatchResults;
    }
  }

  interface HTMLUsagePageElement extends StencilComponents.UsagePage, HTMLStencilElement {}

  var HTMLUsagePageElement: {
    prototype: HTMLUsagePageElement;
    new (): HTMLUsagePageElement;
  };
  interface HTMLElementTagNameMap {
    'usage-page': HTMLUsagePageElement;
  }
  interface ElementTagNameMap {
    'usage-page': HTMLUsagePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'usage-page': JSXElements.UsagePageAttributes;
    }
  }
  namespace JSXElements {
    export interface UsagePageAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
