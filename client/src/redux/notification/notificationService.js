import { base_url, instance, config } from "../../utils/axiosConfig";


const markNotificationsSeen = async (userData) => {
  const response = await instance.post(`${base_url}notification/mark-all-notifications-as-seen`, userData, config);
  if (response.data) {
    return response.data;
  }
};

const deleteNotifications = async (userData) => {
  const response = await instance.post(`${base_url}notification/delete-all-notifications`, userData, config);
  if (response.data) {
    return response.data;
  }
};

export const notificationService = {
  markNotificationsSeen,
  deleteNotifications
};