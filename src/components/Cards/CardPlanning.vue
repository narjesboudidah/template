<template>
    <div class="calendar">
      <div class="header">
        <button @click="previousMonth">&lt;</button>
        <h2>{{ month }} {{ year }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="day in days" v-bind:key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in weeks" v-bind:key="week">
            <td v-for="day in week" v-bind:key="day.date" :class="getClass(day)" @click="selectDate(day)">
              <slot name="date" v-bind:date="day"></slot>
              {{ day.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        today: new Date(),
        selectedDate: null,
        currentYear: null,
        currentMonth: null,
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weeks: [],
      };
    },
    computed: {
      year() {
        return this.currentYear;
      },
      month() {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return months[this.currentMonth];
      },
    },
    methods: {
      generateCalendar() {
        const year = this.currentYear;
        const month = this.currentMonth;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let date = 1;
        this.weeks = [];
        for (let i = 0; i < 6; i++) {
          let week = [];
          if (i === 0) {
            for (let j = 0; j < firstDay; j++) {
              week.push({ date: "" });
            }
            for (let j = firstDay; j < 7; j++) {
              week.push({ date: date, isCurrentMonth: true });
              date++;
            }
          } else {
            for (let j = 0; j <7; j++) {
if (date > daysInMonth) {
week.push({ date: "" });
} else {
week.push({ date: date, isCurrentMonth: true });
date++;
}
}
}
this.weeks.push(week);
}
},
previousMonth() {
if (this.currentMonth === 0) {
this.currentYear--;
this.currentMonth = 11;
} else {
this.currentMonth--;
}
this.generateCalendar();
},
nextMonth() {
if (this.currentMonth === 11) {
this.currentYear++;
this.currentMonth = 0;
} else {
this.currentMonth++;
}
this.generateCalendar();
},
selectDate(day) {
if (day.date !== "") {
this.selectedDate = new Date(this.currentYear, this.currentMonth, day.date);
this.$emit("date-selected", this.selectedDate);
}
},
getClass(day) {
let classes = [];
if (!day.isCurrentMonth) {
classes.push("not-current-month");
}
if (day.date === this.today.getDate() && this.currentYear === this.today.getFullYear() && this.currentMonth === this.today.getMonth()) {
classes.push("today");
}
if (this.selectedDate && day.date === this.selectedDate.getDate() && this.currentYear === this.selectedDate.getFullYear() && this.currentMonth === this.selectedDate.getMonth()) {
classes.push("selected");
}
return classes.join(" ");
},
},
mounted() {
this.currentYear = this.today.getFullYear();
this.currentMonth = this.today.getMonth();
this.generateCalendar();
},
};
</script>