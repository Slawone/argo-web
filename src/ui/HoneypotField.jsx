export const HONEYPOT_NAME = "company_fax";

export const HoneypotField = ({ ref }) => (
  <input
    ref={ref}
    type="text"
    name={HONEYPOT_NAME}
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    className="absolute -left-[9999px] top-0 h-px w-px opacity-0"
  />
);
