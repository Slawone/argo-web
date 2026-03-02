interface IconProps {
  className?: string;
  size?: number;
}

export const ArrowUpIcon = ({ className, size = 16 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M10.2866 6.36399L14.2866 0.636719L10.2866 6.36399Z" fill="currentColor"/>
    <path d="M10.2866 6.36399L14.2866 0.636719" stroke="#00B6CC" strokeWidth="0.844246" strokeLinejoin="round"/>
    <path d="M11.999 9.54492L17.999 10.8176L11.999 9.54492Z" fill="currentColor"/>
    <path d="M11.999 9.54492L17.999 10.8176" stroke="#FF00E6" strokeWidth="0.844246" strokeLinejoin="round"/>
    <path d="M11.4287 7.63725L18.0002 5.0918L11.4287 7.63725Z" fill="#00FF66"/>
    <path d="M11.4287 7.63725L18.0002 5.0918" stroke="#00FF66" strokeWidth="0.844246" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.02365 1.99341L8.00002 0L8.97638 1.99341L13.9221 12.0909L14.8572 14H12.9045H3.09558H1.14286L2.07792 12.0909L3.79221 8.59091H0L0 6.68182H4.72728L7.02365 1.99341ZM4.03065 12.0909L8.00002 3.98681L11.9694 12.0909H4.03065Z" fill="currentColor"/>
  </svg>
);
