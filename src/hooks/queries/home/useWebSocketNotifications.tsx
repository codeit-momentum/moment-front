import { useEffect, useState } from 'react';

export const useWebSocketNotifications = (userID: string) => {
  const [newNotificationCount, setNewNotificationCount] = useState<number>(0);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3000?userID=${userID}`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'newNotificationCount') {
        setNewNotificationCount(data.count);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return () => {
      ws.close();
    };
  }, [userID]);

  return newNotificationCount;
};
