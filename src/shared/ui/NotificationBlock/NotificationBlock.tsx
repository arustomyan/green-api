interface countNotificationProps {
  countNotification: string | number;
  user: string;
  message: string;
}

export const NotificationBlock: React.FC<countNotificationProps> = ({
  countNotification,
  user,
  message,
}) => {
  return (
    <div>
      <span className="">Увас есть {countNotification} уведомлений</span>
      <span className={""}>От {user}</span>
      <span className={""}>Текст сообщения: {message}</span>
    </div>
  );
};
