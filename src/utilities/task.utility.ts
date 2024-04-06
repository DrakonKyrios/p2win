export const getStatusText = (status: number): string => {
  switch (status) {
    case 0:
      return "Cancelled";
    case 10:
      return "Not Ready";
    case 12:
      return "Waiting";
    case 20:
      return "Loading";
    case 30:
      return "In Progress";
    case 40:
      return "Completed";
    default:
      return "Not Ready";
  }
};
