import styles from "./Tasks.module.scss";

const TasksList = [
  { title: "1", description: "Создание рабочих мест для ветеранов СВО" },
  { title: "2", description: "Развитие сельских территорий" },
  { title: "3", description: "Обеспечение жильём участников СВО и их семей" },
  { title: "4", description: "Переселение из ветхого и аварийного жилья" },
  { title: "5", description: "Обеспечение жильём детей-сирот" },
  { title: "6", description: "Развитие локальной строительной индустрии" },
];

function Task({ title, description }) {
  return (
    <div className={styles.task_item}>
      <span className={styles.task_item_number}>{title}</span>
      <p className={styles.task_item_description}>{description}</p>
    </div>
  );
}

export default function Tasks() {
  return (
    <section className={styles.tasks}>
      <h2 className={styles.title}>Задачи</h2>

      <div className={styles.task_grid}>
        {TasksList.map((item) => (
          <Task
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
