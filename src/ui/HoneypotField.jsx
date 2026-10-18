// Поле-ловушка для спам-ботов: человек его не видит и не заполняет,
// а боты заполняют все поля подряд. send.php отбрасывает заявки, где оно не пустое.
// Не display:none — такие поля некоторые боты пропускают.
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
