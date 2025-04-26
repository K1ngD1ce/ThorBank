import OpenAccount from "@/features/intro/ui/OpenAccount";
import cls from "./authPromo.module.scss";
import Check from "@/shared/assets/svg/checkWithBackground.svg";
import Transaction from "@/shared/assets/svg/transaction.svg";
import Rus from "@/shared/assets/svg/RUS.svg";
import Usa from "@/shared/assets/svg/USA.svg";
import ArrowsBg from "@/shared/assets/svg/backgroundArrows.svg";
import Plus from "@/shared/assets/svg/plusWithBg.svg";
import Dollar from "@/shared/assets/svg/dollar.svg";
import Euro from "@/shared/assets/svg/euro.svg";
import Bitcoin from "@/shared/assets/svg/bitcoin.svg";
import Ethereum from "@/shared/assets/svg/ethereum.svg";

interface Transaction {
  id: string;
  name: string;
  amount: number;
}

export default function AuthPromo() {
  const transactions: Transaction[] = [
    { id: "1", name: "Joel Kenley", amount: 68 },
    { id: "2", name: "Mark Smith", amount: 68 },
    { id: "3", name: "Lenen Roy", amount: 68 },
  ];

  return (
    <section className={cls.authPromo}>
      <div className={`container ${cls.authPromo__container}`}>
        <div className={cls.authPromo__info}>
          <div className={cls.authPromo__requiments}>
            <Check width={24} height={24} />
            <span>No LLC Required, No Credit Check.</span>
          </div>
          <div className={cls.authPromo__text}>
            <h2 className={`section__title`}>
              Welcome to YourBank Empowering Your <span>Financial Journey</span>
            </h2>

            <div className={`text ${cls.authPromo__descr}`}>
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers needs.
            </div>
          </div>
          <OpenAccount />
        </div>

        <div className={cls.authPromo__previewTransaction}>
          <div className={cls.your__transaction}>
            <span className={cls.authPromo__title}>Your Transactions</span>
            <div className={cls.transactions__wrapper}>
              {transactions.map((tx, index) => {
                const shiftY = index * 55;
                const scale = 1 - index * 0.1;
                const zIndex = transactions.length - index;
                const opacity = 1 - index * 0.3;

                return (
                  <div
                    key={tx.id}
                    className={cls.transaction__item}
                    style={{
                      transform: `translateX(-50%) translateY(${shiftY}px) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <div className="flex gap-[8.5px] items-center">
                      <Transaction width={38} height={38} />
                      <div className="flex flex-col">
                        <span className={cls.transaction__title}>
                          Transaction
                        </span>
                        <span className={cls.transaction__name}>{tx.name}</span>
                      </div>
                    </div>
                    <span className={cls.transaction__amount}>
                      -${tx.amount.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cls.money__exchange}>
            <span className={cls.authPromo__title}>Money Exchange</span>

            <table className={cls.table}>
              <tbody>
                <tr>
                  <td>
                    <div className={cls.currency}>
                      <Rus width={35} height={35} />
                      Rub
                    </div>
                    <span className={cls.nameOfCurrency}>Russain Rubles</span>
                  </td>
                  <td>
                    <div className={cls.currency}>
                      <Usa width={35} height={35} />
                      Usd
                    </div>
                    <span className={cls.nameOfCurrency}>
                      United States Dollar
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={cls.amountOfCurrency__wrapepr}>85.45</td>
                  <td className={cls.amountOfCurrency__wrapepr}>1,00</td>
                </tr>
              </tbody>
            </table>

            <div className={cls.exchange}>Exchange</div>
          </div>
          <div className={cls.arrowsBg}>
            <ArrowsBg width={417} height={382} />
          </div>
          <div className={cls.enrollment}>
            <Plus width={38} height={38} />
            <div className="flex flex-col">
              <span className="text-[17px] leading-[150%]">+ $5000,00</span>
              <span className="text-[13px] font-light leading-[150%]">
                Monthly Income
              </span>
            </div>
          </div>
          <div className={cls.supported_currency}>
            <span>Supported Currency</span>
            <ul className={`list__reset ${cls.curency__list}`}>
              <li>
                <div className={cls.iconBg}>
                  <Dollar />
                </div>
              </li>
              <li>
                <div className={cls.iconBg}>
                  <Euro />
                </div>
              </li>
              <li>
                <div className={cls.iconBg}>
                  <Bitcoin />
                </div>
              </li>
              <li>
                <div className={cls.iconBg}>
                  <Ethereum />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
