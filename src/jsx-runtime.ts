import { type Props, type Tag } from "./types";

type Child = Element | string;

export function createElement(
  tag: Tag,
  props: Props,
  ...children: Child[]
): Element {
  const el = document.createElement(tag);

  for (const prop in props) {
    if (prop === "style") {
      const styles = props[prop];
      for (const style in styles) {
        el.style[style] = styles[style];
      }
    } else {
      el.setAttribute(prop, props[prop]);
    }
  }

  for (const child of children) {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }

  return el;
}
