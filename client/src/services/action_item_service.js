import api from "./api";

export const getActionItems =
  () =>
    api.get(
      "/action-items"
    );

export const updateStatus =
  (
    id,
    status
  ) =>
    api.patch(
      `/action-items/${id}/status`,
      { status }
    );

export const getOverdue =
  () =>
    api.get(
      "/action-items/overdue"
    );