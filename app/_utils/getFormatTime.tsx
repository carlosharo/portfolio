export const getTime = (time: number) => {
    const minutes = `${Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))}`;
    const seconds = `${Math.floor((time % (1000 * 60)) / 1000)}`;
    const formatTime = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    return {
        minutes,
        seconds,
        formatTime: parseInt(minutes) > 0 ? formatTime : '00:00',
    }
}