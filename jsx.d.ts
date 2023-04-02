interface Factory {
  createElement: (
    tag: keyof JSX.IntrinsicElements,
    props: JSX.IntrinsicElements[keyof JSX.IntrinsicElements],
    ...children: (Child | null)[]
  ) => JSX.Element;
}

// TODO: type keys so they are narrower than string
type CSSProperties = Partial<CSSStyleDeclaration>;

type HTMLReferrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

type Child = Element | string;
type HTMLGlobalAttributes<T extends Element> = {
  accesskey?: string;
  class?: string;
  contenteditable?: boolean;
  dir?: "ltr" | "rtl" | "auto";
  draggable?: boolean;
  hidden?: boolean;
  id?: string;
  lang?: string;
  spellcheck?: boolean;
  style?: CSSProperties;
  tabindex?: string | number;
  title?: string;
  translate?: "yes" | "no";
};

interface AnchorHTMLElements<T extends HTMLAnchorElement>
  extends HTMLGlobalAttributes<T> {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  rel?: string;
  target?: string;
  type?: string;
}

interface AreaHTMLAttributes<T extends HTMLAreaElement>
  extends HTMLGlobalAttributes<T> {
  alt?: string;
  coords?: string;
  download?: string;
  href?: string;
  hreflang?: string;
  media?: string;
  referrerpolicy?: HTMLReferrerPolicy;
  filename?: string;
}

interface HTMLFormElements<T extends Element> extends HTMLGlobalAttributes<T> {
  name?: string;
  value?: string | number | string[];
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  autocomplete?: string;
}

interface HTMLImageElements<T extends Element> extends HTMLGlobalAttributes<T> {
  src: string;
  alt?: string | null;
  sizes?: string;
  srcset?: string;
}

interface HTMLTextElements<T extends Element> extends HTMLGlobalAttributes<T> {
  lang: any;
}

interface HTMLListElements<T extends Element> extends HTMLGlobalAttributes<T> {}

interface HTMLTableElements<T extends Element> extends HTMLGlobalAttributes<T> {
  scope: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    a: AnchorHTMLElements<HTMLAnchorElement>;
    abbr: HTMLGlobalAttributes<HTMLElement>;
    address: HTMLGlobalAttributes<HTMLElement>;
    applet: HTMLGlobalAttributes<HTMLElement>;
    area: AreaHTMLAttributes<HTMLAreaElement>;
  }

  interface Element extends HTMLElement {}
}
