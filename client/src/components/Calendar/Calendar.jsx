import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Calendar.css";
const Calendar = ({ setDate }) => {
  return (
    <CalendarHeatmap
    horizontal={true}
      startDate={new Date("2023-02-01")}
      endDate={new Date("2023-03-02")}
      values={[
        { date: "2023-02-02", count: 0 },
        { date: "2023-02-03", count: 1 },
        { date: "2023-02-04", count: 2 },
        { date: "2023-02-05", count: 3 },
        { date: "2023-02-06", count: 4 },
        { date: "2023-02-07", count: 5 },
      ]}
      onClick={(value) => {
        if (value) {
          setDate(new Date(value.date));
        }
      }}
      titleForValue={(value) => {
        if (!value) {
          return "No commits";
        }
        return `${value.count} attendance on ${value.date}`;
      }}
      classForValue={(value) => {
        if (!value) {
          return "color-empty";
        }
        return `color-count-${value.count}`;
      }}
    />
  );
};

export default Calendar;
