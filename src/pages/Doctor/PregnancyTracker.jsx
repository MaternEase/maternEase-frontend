import React, { useState } from 'react';
import PregnancyForm from '../../components/Doctor/PregnancyForm';
import MealPlan from '../../components/Doctor/MealPlan';
import PregnancyInsights from '../../components/Doctor/PregnancyInsights';
import ActivitySuggestions from '../../components/Doctor/ActivitySuggestions';
import { analyzePregnancyData, getMealPlan, getActivitySuggestions } from '../../services/PregancyService';


const PregnancyTracker = () => {
  const [insights, setInsights] = useState(null);
  const [mealPlan, setMealPlan] = useState([]);
  const [activities, setActivities] = useState([]);

  const handleDataSubmit = (data) => {
    const analyzedData = analyzePregnancyData(data);
    setInsights(analyzedData);
    setMealPlan(getMealPlan(data));
    setActivities(getActivitySuggestions(data));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pregnancy Tracker</h1>
      <PregnancyForm onSubmit={handleDataSubmit} />
      {insights && (
        <>
          <PregnancyInsights insights={insights} />
          <MealPlan meals={mealPlan} />
          <ActivitySuggestions activities={activities} />
        </>
      )}
    </div>
  );
};

export default PregnancyTracker;