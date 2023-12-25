import Image from "next/image";
import styles from "./transaction.module.scss";

const table = [
  {
    image: "/avatar.png",
    name: "muhamed",
    status: "pending",
    date: "20.02.2023",
    amount: "200$",
  },
  {
    image: "/avatar.png",
    name: "muhamed",
    status: "done",
    date: "20.02.2023",
    amount: "200$",
  },
  {
    image: "/avatar.png",
    name: "muhamed",
    status: "cancelled",
    date: "20.02.2023",
    amount: "200$",
  },
  {
    image: "/avatar.png",
    name: "muhamed",
    status: "pending",
    date: "20.02.2023",
    amount: "200$",
  },
  {
    image: "/avatar.png",
    name: "muhamed",
    status: "done",
    date: "20.02.2023",
    amount: "200$",
  },
];

const Transaction = () => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {table.map((user) => {
          return (
            <tr className={styles.row} key={user.name}>
              <td className={styles.user}>
                <Image
                  className={styles.image}
                  src={user.image}
                  alt={user.name}
                  width={35}
                  height={35}
                />
                <span className={styles.name}>{user.name}</span>
              </td>
              <td className={styles.status}>
                <span className={styles[user.status]}>
                  {user.status}
                </span>
              </td>
              <td className={styles.date}>{user.date}</td>
              <td className={styles.amount}>{user.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transaction;
