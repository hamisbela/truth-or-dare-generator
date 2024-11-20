import React, { useState } from 'react';
import { truths, dares } from './data/questions';
import { Card } from './components/Card';
import { BlogPost } from './components/BlogPost';
import { Dices, HeartHandshake } from 'lucide-react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [questionType, setQuestionType] = useState<'truth' | 'dare' | null>(null);

  const getRandomQuestion = (type: 'truth' | 'dare') => {
    const questions = type === 'truth' ? truths : dares;
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setQuestionType(type);
  };

  const handleSwitch = () => {
    const newType = questionType === 'truth' ? 'dare' : 'truth';
    getRandomQuestion(newType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Truth or Dare Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spice up your gatherings with our modern take on the classic party game.
            Choose your challenge and let the fun begin!
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 mb-16">
          {!questionType ? (
            <div className="flex gap-4">
              <button
                onClick={() => getRandomQuestion('truth')}
                className="flex items-center gap-2 py-3 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                <HeartHandshake size={20} />
                Truth
              </button>
              <button
                onClick={() => getRandomQuestion('dare')}
                className="flex items-center gap-2 py-3 px-6 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
              >
                <Dices size={20} />
                Dare
              </button>
            </div>
          ) : (
            <Card
              type={questionType}
              question={currentQuestion}
              onNext={() => getRandomQuestion(questionType)}
              onSwitch={handleSwitch}
            />
          )}
        </div>

        <BlogPost />
      </main>
    </div>
  );
}

export default App;