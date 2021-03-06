import styles from './InfosWrapper.module.css';

interface InfosWrapperProps {
  createdTasksAmount: number;
  concludedTasksAmount: number;
}

export const InfosWrapper = ({
  createdTasksAmount,
  concludedTasksAmount,
}: InfosWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.infoBlue}>
          Tarefas criadas
          <span className={styles.counter}> {createdTasksAmount} </span>
        </div>
      </div>
      <div>
        <div className={styles.infoPurple}>
          Concluídas
          <span className={styles.counter}>
            {concludedTasksAmount} de {createdTasksAmount}
          </span>
        </div>
      </div>
    </div>
  );
};
