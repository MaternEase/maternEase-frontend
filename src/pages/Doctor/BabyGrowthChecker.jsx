import React, { useState } from 'react'; 
import { whoStandards } from '../../services/whoStandards';
import { mealPlans } from '../../services/mealPlans';
import GrowthChart from '../../components/Doctor/GrowthChart';
import '../CSS/BabyGrowthChecker.css';

function BabyGrowthChecker() {
  const [babyData, setBabyData] = useState({ weight: '', height: '', headCircumference: '', gender: 'boys', age: '' });
  const [analysis, setAnalysis] = useState(null);
  const [mealPlan, setMealPlan] = useState('');
  const [chartData, setChartData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...babyData, [name]: value };

    // Validate inputs as the user types
    validateInput(name, value);

    setBabyData(updatedData);
  };

  const validateInput = (name, value) => {
    const newErrors = { ...errors };
    const numberValue = parseFloat(value);

    // Validation conditions
    if (isNaN(numberValue) || numberValue <= 0) {
      newErrors[name] = 'Value must be a positive number.';
    } else if (name === 'weight' && (numberValue < 2 || numberValue > 25)) {
      newErrors[name] = 'Weight must be between 2kg and 25kg.';
    } else if (name === 'height' && (numberValue < 40 || numberValue > 120)) {
      newErrors[name] = 'Height must be between 40cm and 120cm.';
    } else if (name === 'headCircumference' && (numberValue < 30 || numberValue > 60)) {
      newErrors[name] = 'Head circumference must be between 30cm and 60cm.';
    } else if (name === 'age' && (numberValue < 1 || numberValue > 60)) {
      newErrors[name] = 'Age must be between 1 and 60 months.';
    } else {
      delete newErrors[name]; // Remove error if valid
    }

    setErrors(newErrors);
  };

  const analyzeGrowth = () => {
    // Prevent analysis if there are validation errors
    if (Object.keys(errors).length > 0) {
      alert('Please fix validation errors before proceeding.');
      return;
    }

    const { weight, height, headCircumference, gender, age } = babyData;

    // Ensure age is valid for lookup
    const parsedAge = parseInt(age, 10);
    if (!whoStandards.weight[gender][parsedAge]) {
      alert('Invalid age. Please enter a valid age in months.');
      return;
    }

    // Fetch ranges for the given age
    const weightRange = whoStandards.weight[gender][parsedAge];
    const heightRange = whoStandards.height[gender][parsedAge];
    const headRange = whoStandards.headCircumference[gender][parsedAge];

    const results = {
      weight: weight < weightRange.min ? 'Underweight' : weight > weightRange.max ? 'Overweight' : 'Normal',
      height: height < heightRange.min ? 'Stunted' : height > heightRange.max ? 'Tall for age' : 'Normal',
      headCircumference: headCircumference < headRange.min ? 'Microcephaly' : headCircumference > headRange.max ? 'Macrocephaly' : 'Normal',
    };

    setAnalysis(results);
    setMealPlan(mealPlans[results.weight] || mealPlans[results.height] || mealPlans[results.headCircumference]);

    // Prepare data for the chart
    setChartData({
      labels: ['Weight', 'Height', 'Head Circumference'],
      datasets: [
        {
          label: 'Your Baby',
          data: [weight, height, headCircumference],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'Normal Range (Min)',
          data: [weightRange.min, heightRange.min, headRange.min],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
        {
          label: 'Normal Range (Max)',
          data: [weightRange.max, heightRange.max, headRange.max],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
      ],
    });
  };

  return (
    <div className="container">
      <h2>Baby Growth Checker</h2>
      <form>
        <label>
          Gender:
          <select name="gender" onChange={handleChange} value={babyData.gender}>
            <option value="boys">Boy</option>
            <option value="girls">Girl</option>
          </select>
        </label>
        <label>
          Age (in months):
          <input
            type="number"
            name="age"
            value={babyData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error-message">{errors.age}</p>}
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={babyData.weight}
            onChange={handleChange}
          />
          {errors.weight && <p className="error-message">{errors.weight}</p>}
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={babyData.height}
            onChange={handleChange}
          />
          {errors.height && <p className="error-message">{errors.height}</p>}
        </label>
        <label>
          Head Circumference (cm):
          <input
            type="number"
            name="headCircumference"
            value={babyData.headCircumference}
            onChange={handleChange}
          />
          {errors.headCircumference && <p className="error-message">{errors.headCircumference}</p>}
        </label>
        <button type="button" onClick={analyzeGrowth}>Check Growth</button>
      </form>

      {analysis && (
        <div className="results">
          <h3>Results</h3>
          <p>Weight: {analysis.weight}</p>
          <p>Height: {analysis.height}</p>
          <p>Head Circumference: {analysis.headCircumference}</p>

          <div className="meal-plan">
            <h4>Suggested Meal Plan:</h4>
            <p><strong>Breakfast:</strong> {mealPlan?.breakfast || 'N/A'}</p>
            <p><strong>Lunch:</strong> {mealPlan?.lunch || 'N/A'}</p>
            <p><strong>Dinner:</strong> {mealPlan?.dinner || 'N/A'}</p>
          </div>
        </div>
      )}

      {chartData && (
        <div>
          <h3>Growth Chart</h3>
          <GrowthChart data={chartData} />
        </div>
      )}
    </div>
  );
}

export default BabyGrowthChecker;
