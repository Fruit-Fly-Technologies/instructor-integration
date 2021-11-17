export const state = () => ({
  currentProfile: 'John Cole',
  profiles: {
    'John Cole': {
      classes: [
        {
          meta: {
            name: 'Introduction to Engineering & Computer Science',
            code: 'CS 1200.011',
            professor: 'John Cole'
          },
          assignments: [
            {
              title: 'Brush Your Teeth',
              instructions: 'Write pseudocode for brushing your teeth.',
              assignDate: '11/16/2021',
              dueDate: '11/18/2021'
            }
          ],
          students: [],
          announcements: [
            {
              title: 'Complete Your Daily Challenges',
              body: 'You need to complete your daily challenges, or you\'ll get zeroes for them in the gradebook!',
              date: '11/15/2021'
            }
          ]
        },
        {
          meta: {
            name: 'Computer Architecture',
            code: 'CS 2340.010',
            professor: 'John Cole'
          }
        }]
    }
  }
})

export const getters = {
  profile (state) {
    return state.profiles[state.currentProfile]
  },
  classes (state) {
    return state.profiles[state.currentProfile].classes
  },
  class_ (state) {
    return code => state.profiles[state.currentProfile].classes.find(
      c => c.meta.code === code)
  }
}
