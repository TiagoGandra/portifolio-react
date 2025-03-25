import { pageLink } from "../constants/pagelink.js";

export const PageLinks = ({ parentClass, parentId, itemClass }) => {
  return (
    <ul className={parentClass} id={parentId}>
      {pageLink.map((props) => {
        return (
          <li key={props.id}>
            <a
              href={props.href}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              {" "}
              {props.text}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
