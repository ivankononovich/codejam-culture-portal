export default architects => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const allDates = [];

  Object.entries(architects).forEach(architect => {
    const bornDate = architect[1].bornDate.slice(0, -4).concat(currentYear);

    
    const dateToCompare = new Date(bornDate);
    allDates.push(dateToCompare);
  });

  const dateDifferences = allDates.map(dateToCompare =>
    currentDate.getTime() - dateToCompare.getTime()
  );

  const closestDate = [...dateDifferences];

  const targetDate = closestDate
    .filter(date =>
      date >= 0
      )
    .sort(
      (a, b) => b - a
    )
    .pop();

    const indexOfArchitect = dateDifferences.indexOf(targetDate);

    return Object.entries(architects)[indexOfArchitect][1];
}