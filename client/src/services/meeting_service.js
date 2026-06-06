import api from "./api";

export const getMeetings = () =>
  api.get("/meetings");

export const getMeeting = (id) =>
  api.get(`/meetings/${id}`);

export const createMeeting = (
  data
) =>
  api.post(
    "/meetings",
    data
  );

export const analyzeMeeting = (id) =>
  api.post(`/meetings/${id}/analyze`);  