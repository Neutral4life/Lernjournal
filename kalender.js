function cellHTML(dateObj, muted){
  const isToday = sameDate(dateObj, realToday);
  const classes = ['cell'];
  if (muted) classes.push('muted');
  if (isToday) classes.push('today');
  
  const dateStr = dateObj.toISOString().split('T')[0]; // YYYY-MM-DD

  return `
    <a href="day.html?date=${dateStr}" 
       class="${classes.join(' ')}" 
       role="gridcell" 
       aria-selected="${isToday ? 'true' : 'false'}">
      <span class="date">${dateObj.getDate()}</span>
      <span class="sr-only">${dateObj.toLocaleDateString(undefined, { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</span>
    </a>`;
}