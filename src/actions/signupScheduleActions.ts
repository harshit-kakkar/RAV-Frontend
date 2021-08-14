interface scheduleStateModel {
    [day : string] : {
        startTime:string,
        endTime:string,
        checked:Boolean
      }
  }
export const setSignupSchedule = (schedule: scheduleStateModel) => {
    return {
        type: 'SET_SIGNUP_SCHEDULE',
        payload: schedule
    }
}