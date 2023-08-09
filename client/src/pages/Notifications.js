import { Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getUser } from "../redux/user/userSlice";
import { markNotificationsAsSeen, deleteNotifications, resetState } from "../redux/notification/notificationSlice";

function Notifications() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notificationsState = useSelector((state) => state.notifications);
  const {
    isDeleteSuccess,
    isSeenSuccess,
    isError,
    isLoading,
    markedNotifications,
    deletedNotifications,
  } = notificationsState;

  useEffect(() => {
    if (isSeenSuccess && markedNotifications) {
      // console.log(markedNotifications.data);
      dispatch(getUser(markedNotifications.data))
    }
    if (isDeleteSuccess && deletedNotifications) {
      // console.log(deletedNotifications.data);
      dispatch(getUser(deletedNotifications.data))
    }
  }, [isDeleteSuccess, isSeenSuccess, markedNotifications, deletedNotifications]);

  const markAllAsSeen = async () => {
    try {
      dispatch(markNotificationsAsSeen({ userId: user._id }))
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const deleteAll = async () => {
    try {
      dispatch(deleteNotifications({ userId: user._id }))
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <Layout>
      <h1 className="page-title">Notifications</h1>
      <hr />

      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" onClick={() => markAllAsSeen()}>Mark all as seen</h1>
          </div>

          {user?.unseenNotifications?.map((notification) => (
            <div className="card p-2 mt-2" onClick={() => navigate(notification.onClickPath)}>
              <div className="card-text">{notification.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="seen" key={1}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" onClick={() => deleteAll()}>Delete all</h1>
          </div>
          {user?.seenNotifications?.map((notification) => (
            <div className="card p-2 mt-2" onClick={() => navigate(notification.onClickPath)}>
              <div className="card-text">{notification.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

export default Notifications;
