import cls from "./openAccount.module.scss";

const OpenAccount = () => (
  <button className={`custom__btn ${cls.openAccountBtn}`}>
    <span>Open account</span>
  </button>
);

export default OpenAccount;
