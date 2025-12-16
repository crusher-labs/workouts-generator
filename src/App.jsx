import React, { useState } from 'react';
    import { Helmet } from 'react-helmet';
    import { motion, AnimatePresence } from 'framer-motion';
    import Hero from '@/components/Hero';
    import QuestionnaireForm from '@/components/QuestionnaireForm';
    import WorkoutResults from '@/components/WorkoutResults';
    import { Toaster } from '@/components/ui/toaster';
    import Features from '@/components/Features';
    import LogoCloud from '@/components/LogoCloud';
    import WorkoutTypes from '@/components/WorkoutTypes';
    import Trainers from '@/components/Trainers';
    import BentoGrid from '@/components/BentoGrid';
    import CallToAction from '@/components/CallToAction';

    function App() {
      const [showQuestionnaire, setShowQuestionnaire] = useState(false);
      const [workoutPlan, setWorkoutPlan] = useState(null);
      const [initialGender, setInitialGender] = useState(null);

      const handleStartQuestionnaire = (gender) => {
        setInitialGender(gender);
        setShowQuestionnaire(true);
        setWorkoutPlan(null);
      };

      const handleQuestionnaireComplete = (data) => {
        const generatedWorkout = generateWorkout(data);
        setWorkoutPlan(generatedWorkout);
      };

      const handleReset = () => {
        setShowQuestionnaire(false);
        setWorkoutPlan(null);
        setInitialGender(null);
      };

      const generateWorkout = (data) => {
        const { age, weight, weightUnit, height, heightUnit, goal, fitnessLevel, daysPerWeek, focusAreas } = data;
        
        const weightInKg = weightUnit === 'lbs' ? (weight * 0.453592).toFixed(1) : weight;
        let heightInCm = height;
        if (heightInCm.includes('ft')) {
            const feet = parseInt(heightInCm.split('ft')[0]);
            const inches = parseInt(heightInCm.split('ft')[1].replace('in', ''));
            heightInCm = ((feet * 12) + inches) * 2.54;
        }
        
        const exerciseLibrary = {
            'Chest': {
                beginner: { name: 'Push-ups (on knees)', sets: 3, reps: '8-12', rest: '60s' },
                intermediate: { name: 'Bench Press', sets: 3, reps: '8-10', rest: '90s' },
                advanced: { name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: '90s' },
            },
            'Back': {
                beginner: { name: 'Dumbbell Rows', sets: 3, reps: '10-12/side', rest: '60s' },
                intermediate: { name: 'Pull-ups (assisted or bodyweight)', sets: 3, reps: 'to failure', rest: '90s' },
                advanced: { name: 'Weighted Pull-ups', sets: 4, reps: '6-8', rest: '120s' },
            },
            'Legs': {
                beginner: { name: 'Bodyweight Squats', sets: 3, reps: '12-15', rest: '60s' },
                intermediate: { name: 'Barbell Squats', sets: 3, reps: '8-10', rest: '120s' },
                advanced: { name: 'Bulgarian Split Squats', sets: 4, reps: '8-10/leg', rest: '90s' },
            },
            'Shoulders': {
                beginner: { name: 'Pike Push-ups', sets: 3, reps: '8-10', rest: '60s' },
                intermediate: { name: 'Overhead Press (Dumbbell)', sets: 3, reps: '8-10', rest: '90s' },
                advanced: { name: 'Arnold Press', sets: 4, reps: '8-10', rest: '90s' },
            },
            'Arms': {
                beginner: { name: 'Bicep Curls (Bands)', sets: 3, reps: '12-15', rest: '45s' },
                intermediate: { name: 'Dumbbell Bicep Curls', sets: 3, reps: '10-12', rest: '60s' },
                advanced: { name: 'Chin-ups', sets: 4, reps: 'to failure', rest: '90s' },
            },
            'Core': {
                beginner: { name: 'Plank', sets: 3, reps: '30-45s hold', rest: '45s' },
                intermediate: { name: 'Hanging Knee Raises', sets: 3, reps: '12-15', rest: '60s' },
                advanced: { name: 'Toes to Bar', sets: 4, reps: '10-12', rest: '90s' },
            },
        };

        const cardioOptions = {
          beginner: [
            { name: 'Brisk Walking', duration: '20-30 min', intensity: 'Moderate' },
            { name: 'Light Jogging', duration: '15-20 min', intensity: 'Low-Moderate' },
          ],
          intermediate: [
            { name: 'Running', duration: '30-40 min', intensity: 'Moderate-High' },
            { name: 'Cycling', duration: '35-45 min', intensity: 'Moderate' },
          ],
          advanced: [
            { name: 'HIIT Sprints', duration: '20-25 min', intensity: 'Very High' },
            { name: 'Long Distance Run', duration: '45-60 min', intensity: 'Very High' },
          ],
        };

        const selectedExercises = focusAreas.map(area => {
            return exerciseLibrary[area][fitnessLevel] || exerciseLibrary[area]['beginner'];
        });

        const bmi = (weightInKg / ((heightInCm / 100) ** 2)).toFixed(1);

        return {
          userInfo: { ...data, weight: weightInKg, height: heightInCm, bmi },
          exercises: selectedExercises.length > 0 ? selectedExercises : [exerciseLibrary['Legs'][fitnessLevel]],
          cardio: cardioOptions[fitnessLevel] || cardioOptions.beginner,
          recommendations: generateRecommendations(data, bmi),
        };
      };

      const generateRecommendations = (data, bmi) => {
        const recommendations = [];
        
        if (bmi < 18.5) {
          recommendations.push('Focus on strength training and consider a slight caloric surplus to support muscle growth.');
        } else if (bmi > 25) {
          recommendations.push('Combine strength training with regular cardio sessions to support weight management.');
        }

        if (data.age > 50) {
          recommendations.push('Include flexibility and balance exercises in your routine.');
          recommendations.push('Ensure proper warm-up and cool-down routines to prevent injury.');
        }

        if (data.goal === 'weight-loss') {
          recommendations.push('Maintain a consistent caloric deficit of 300-500 calories per day.');
          recommendations.push('Prioritize high-intensity interval training (HIIT) for efficient calorie burn.');
        } else if (data.goal === 'muscle-gain') {
          recommendations.push('Consume 1.6-2.2g of protein per kg of body weight daily.');
          recommendations.push('Progressive overload is key - aim to gradually increase weights, reps, or sets over time.');
        }

        recommendations.push('Stay hydrated - drink at least 8 glasses (approx. 2-3 liters) of water daily.');
        recommendations.push('Aim for 7-9 hours of quality sleep per night for optimal recovery and performance.');

        return recommendations;
      };

      return (
        <>
          <Helmet>
            <title>FitGen - Your Personal Workout Generator</title>
            <meta name="description" content="Generate personalized workout plans based on your age, weight, fitness level, and goals. Start your fitness journey today!" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet" />
          </Helmet>
          
          <div className="min-h-screen bg-[#0C0C0C] overflow-hidden">
            <main>
              <AnimatePresence mode="wait">
                {!showQuestionnaire && !workoutPlan && (
                  <div key="landing">
                    <Hero onStart={handleStartQuestionnaire} />
                    <Features />
                    <WorkoutTypes />
                    <Trainers />
                    <BentoGrid />
                    <LogoCloud />
                    <CallToAction onStart={handleStartQuestionnaire} />
                  </div>
                )}
                
                {showQuestionnaire && !workoutPlan && (
                  <QuestionnaireForm 
                    key="questionnaire"
                    onComplete={handleQuestionnaireComplete}
                    onBack={handleReset}
                    initialGender={initialGender}
                  />
                )}
                
                {workoutPlan && (
                  <WorkoutResults 
                    key="results"
                    workoutPlan={workoutPlan}
                    onReset={handleReset}
                  />
                )}
              </AnimatePresence>
            </main>
            
            <Toaster />
          </div>
        </>
      );
    }

    export default App;