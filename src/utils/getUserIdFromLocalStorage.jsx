import { nanoid } from "nanoid";

export const getUserIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userId");

    if (!storedUserId) {
      const userId = nanoid();
      localStorage.setItem("userId", userId);

      const userIdForRequests = localStorage.getItem("userId");
      return userIdForRequests;
    } else {
      return storedUserId;
    }
  }
};
