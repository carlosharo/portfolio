/**
 * 
 * @param time: Time in milliseconds 
 * @returns: The amount of minutes and seconds transformed from milliseconds
 */
export const getTime = (time: number) => {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const isRunning = minutes > 0 || seconds > 0;
    
    return {
        minutes,
        seconds,
        isRunning,
    }
}

/**
 * 
 * @param minutes: Amount of minutes
 * @param seconds: Amount of seconds
 * @returns: The minutes + seconds in the correct format 00:00
 */

export const getFormat = (minutes: number, seconds: number) =>{
    return `${minutes}`.padStart(2, '0') + ':' + `${seconds}`.padStart(2, '0');
}