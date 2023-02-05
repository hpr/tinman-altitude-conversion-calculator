export const altitudeConvert = (
  distanceInMeters: number,
  altitudeInFeet: number,
  timeInSeconds: number
) => {
  const logAltitude = Math.log(altitudeInFeet);
  const logDistance = Math.log(distanceInMeters);
  const logFeetTimesDistance = Math.log(altitudeInFeet * distanceInMeters);
  const timeInMinutes = timeInSeconds / 60;
  const multiplicationFactor =
    altitudeInFeet <= 750
      ? 1
      : 0.0194294334323786 * Math.pow(logAltitude, 4) -
        0.58204012227 * Math.pow(logAltitude, 3) +
        6.53099074887773 * Math.pow(logAltitude, 2) -
        32.4795428772407 * logAltitude +
        61.3421201263799;
  const shiftFactor =
    altitudeInFeet <= 750
      ? -6.62007320653036
      : -0.285467149404212 * Math.pow(logAltitude, 4) +
        8.55856793339852 * Math.pow(logAltitude, 3) -
        96.1580193931405 * Math.pow(logAltitude, 2) +
        478.077054822298 * logAltitude -
        892.151236317125;
  const resultInMinutes =
    timeInMinutes /
    (altitudeInFeet < 750
      ? 1
      : (logFeetTimesDistance * multiplicationFactor + shiftFactor) /
        logDistance);
  return 60 * resultInMinutes;
};
