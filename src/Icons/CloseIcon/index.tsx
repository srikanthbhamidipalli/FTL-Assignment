import React from "react";

interface Props {
  className?: string;
}

const CloseIcon = (props: Props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      className={className}
    >
      <g fill="none" fillRule="evenodd" opacity=".8">
        <path
          fill={"black"}
          fillRule="nonzero"
          d="M11.25 1.808L10.193.75 6 4.942 1.808.75.75 1.808 4.942 6 .75 10.193l1.058 1.057L6 7.057l4.193 4.193 1.057-1.057L7.057 6z"
        />

        <path d="M-3-3h18v18H-3z" />
      </g>
    </svg>
  );
};

export default CloseIcon;
