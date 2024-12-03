export const analyzePregnancyData = (data) => {
  const today = new Date();
  const lmpDate = new Date(data.lmp);
  const weeksPregnant = Math.floor((today - lmpDate) / (7 * 24 * 60 * 60 * 1000));
  const edd = new Date(lmpDate.setDate(lmpDate.getDate() + 280)); // 40 weeks (280 days)

  const insights = {
    weeksPregnant,
    edd: edd.toDateString(),
    abnormalities: [],
    risks: [],
  };

  // Risk Assessment
  if (data.age >= 35) {
    insights.risks.push({
      condition: 'Advanced Maternal Age',
      reason: 'Pregnant at age 35 or older increases the risk of complications.',
      protection: 'Regular check-ups, genetic screening, and close monitoring.',
    });
  }

  if (data.weight < 50) {
    insights.risks.push({
      condition: 'Low Weight',
      reason: 'Being underweight can lead to poor fetal growth.',
      protection: 'Increase calorie intake with healthy, nutrient-dense meals.',
    });
  }

  if (data.preExistingConditions.toLowerCase().includes('diabetes')) {
    insights.abnormalities.push('Potential for Gestational Diabetes.');
  }

  if (data.preExistingConditions.toLowerCase().includes('hypertension')) {
    insights.risks.push({
      condition: 'Hypertension',
      reason: 'High blood pressure can lead to preeclampsia or preterm delivery.',
      protection: 'Monitor blood pressure, reduce sodium intake, and manage stress.',
    });
  }

  return insights;
};

export const getMealPlan = (data) => [
  { title: 'Breakfast', description: 'Whole grain toast with avocado and eggs.' },
  { title: 'Lunch', description: 'Grilled fish with a side of sweet potato and steamed broccoli.' },
  { title: 'Dinner', description: 'Quinoa salad with roasted chicken and mixed vegetables.' },
  { title: 'Snacks', description: 'Fresh fruit, nuts, or low-fat yogurt.' },
];

export const getActivitySuggestions = (data) => {
  const activities = ['Light prenatal yoga', '30-minute daily walks', 'Pelvic floor exercises'];
  if (data.activityLevel === 'Sedentary') {
    activities.push('Incorporate gentle stretching into your routine.');
  }
  if (data.activityLevel === 'Very Active') {
    activities.push('Avoid high-impact activities and focus on low-impact alternatives.');
  }
  return activities;
};
