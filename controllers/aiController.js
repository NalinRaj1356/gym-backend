exports.getWorkoutPlan = (req, res) => {
  const { goal, level, duration } = req.body;

  // Basic example workout data, replace with AI or real logic
  const workouts = {
    fat_loss: [
      { title: 'Fat Loss HIIT', videoUrl: 'https://www.youtube.com/embed/ml6cT4AZdqI' },
      { title: 'Cardio Burn', videoUrl: 'https://www.youtube.com/embed/dJlFmxiL11s' },
    ],
    muscle_gain: [
      { title: 'Muscle Building Full Body', videoUrl: 'https://www.youtube.com/embed/U0bhE67HuDY' },
      { title: 'Strength Training', videoUrl: 'https://www.youtube.com/embed/vpFJFGmF7u8' },
    ],
  };

  let selectedWorkouts;

  if (goal === 'fat_loss') selectedWorkouts = workouts.fat_loss;
  else if (goal === 'muscle_gain') selectedWorkouts = workouts.muscle_gain;
  else selectedWorkouts = [...workouts.fat_loss, ...workouts.muscle_gain];

  // Limit workouts by duration (for demo, ignoring real filtering)
  selectedWorkouts = selectedWorkouts.slice(0, 2);

  res.json({ workouts: selectedWorkouts });
};
