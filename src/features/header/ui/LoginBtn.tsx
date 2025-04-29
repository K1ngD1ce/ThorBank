import cls from "./loginBtn.module.scss";

const LoginBtn = () => (
  <button className={`custom__btn ${cls.loginBtn}`}>
    <span>Login</span>
  </button>
);

export default LoginBtn;
