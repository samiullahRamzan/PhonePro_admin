export const getFormattedDate = (updatedAt) => {
  const now = new Date(); // Current date and time
  const updatedDate = new Date(updatedAt); // Convert updatedAt to a Date object

  // Format time as `HH:MM AM/PM`
  const time = updatedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with AM/PM
  });

  // Calculate today and yesterday dates
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (updatedDate >= today) {
    return `${time}`; // Show only time with AM/PM for today's date
  } else if (updatedDate >= yesterday && updatedDate < today) {
    return `Yesterday`; // Show only "Yesterday" for yesterday's date
  } else {
    // Show full date if it's older than yesterday
    return updatedDate.toLocaleDateString("en-GB");
  }
};
