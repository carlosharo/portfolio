export const initialState = {
    counter: 0,
    seconds: 0,
    minutes: 45,
    showSettings: false,
}

export enum CountdownType {
    STOP = 'stop_counter',
    START = 'start_counter',
    DECREASE = 'decrease_counter',
    UPDATE_SECONDS = 'update_seconds',
    UPDATE_MINUTES = 'update_minutes',
    SHOW_SETTINGS = 'show_settings',
}

export interface ActionPayload {
    counter?: number;
    minutes?: number;
    seconds?: number;
    showSettings?: boolean;
}

interface CountdownAction {
    type: CountdownType;
    payload: ActionPayload;
}

interface CountdownState {
    counter: number;
    seconds: number;
    minutes: number;
    showSettings: boolean;
}

export function countdownReducer(state: CountdownState, action: CountdownAction) {
    const { type, payload: { minutes = 0, seconds = 0, counter = 0, showSettings = false } } = action;

    switch (type) {
        case CountdownType.STOP:
            return {
                ...state,
                counter
            }
        case CountdownType.START:
            return {
                ...state,
                counter: (minutes * 60 * 1000) + (seconds * 1000)
            }
        case CountdownType.DECREASE:
            return {
                ...state,
                counter: state.counter - 1000,
            }
        case CountdownType.UPDATE_SECONDS:
            return {
                ...state,
                seconds: seconds
            }
        case CountdownType.UPDATE_MINUTES:
            return {
                ...state,
                minutes: minutes
            }
        case CountdownType.SHOW_SETTINGS:
            return {
                ...state,
                showSettings: !state.showSettings
            }
        default:
            return state;
    }
}