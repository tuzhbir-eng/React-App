import { Component } from "react";
import UsersListItem from "./UsersListItem";
import styles from "./list.module.css";

const usersList = [
  {
    id: 1,
    firstName: "Олена",
    lastName: "Коваленко",
    age: 24,
    imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "olena.kovalenko@example.com",
    city: "Київ",
  },
  {
    id: 2,
    firstName: "Андрій",
    lastName: "Шевченко",
    age: 31,
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "andrii.shevchenko@example.com",
    city: "Львів",
  },
  {
    id: 3,
    firstName: "Марія",
    lastName: "Бондаренко",
    age: 28,
    imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "maria.bondarenko@example.com",
    city: "Одеса",
  },
  {
    id: 4,
    firstName: "Іван",
    lastName: "Мельник",
    age: 35,
    imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "ivan.melnyk@example.com",
    city: "Харків",
  },
  {
    id: 5,
    firstName: "Софія",
    lastName: "Ткаченко",
    age: 22,
    imgSrc: "https://randomuser.me/api/portraits/women/5.jpg",
    email: "sofia.tkachenko@example.com",
    city: "Тернопіль",
  },
  {
    id: 6,
    firstName: "Дмитро",
    lastName: "Кравченко",
    age: 40,
    imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "dmytro.kravchenko@example.com",
    city: "Дніпро",
  },
  {
    id: 7,
    firstName: "Анна",
    lastName: "Олійник",
    age: 26,
    imgSrc: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "anna.oliynyk@example.com",
    city: "Івано-Франківськ",
  },
  {
    id: 8,
    firstName: "Максим",
    lastName: "Лисенко",
    age: 29,
    imgSrc: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "maksym.lysenko@example.com",
    city: "Полтава",
  },
];

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersList.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);
    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  deleteUser = (id) => {
    this.setState({ users: this.state.users.filter((u) => u.id !== id) });
  };

  mapUser = (u, i) => {
    return (
      <UsersListItem
        key={u.id}
        user={u}
        selectUser={this.selectUser}
        deleteUser={this.deleteUser}
      />
    );
  };

  render() {
    const { users } = this.state;
    // console.log(users);
    // const listItem = this.state.users.map((u, i) => <li>{u}</li>);
    return <div className={styles.container}>{users.map(this.mapUser)}</div>;
  }
}

export default List;
