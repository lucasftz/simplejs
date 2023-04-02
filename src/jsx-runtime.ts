export function createElement(
  tag: keyof JSX.IntrinsicElements,
  props: JSX.IntrinsicElements[keyof JSX.IntrinsicElements],
  ...children: (Child | null)[]
): JSX.Element {
  const el = document.createElement(tag);

  for (const prop in props) {
    if (prop === "style") {
      const styles = props[prop];
      for (const style in styles) {
        // @ts-ignore
        el.style[style] = styles[style];
      }
    } else {
      // @ts-ignore
      el.setAttribute(prop, props[prop]);
    }
  }

  for (const child of children) {
    if (child === null) continue;

    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }

  return el;
}
