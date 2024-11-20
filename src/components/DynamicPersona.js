import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  User, 
  Activity, 
  Target, 
  AlertTriangle,
  MapPin,
  Briefcase,
  Clock,
  Star 
} from 'lucide-react';

const DynamicPersona = () => {
  const [currentJourney, setCurrentJourney] = useState(0);
  
  const persona = {
    basic: {
      name: "Alex Wang",
      age: 26,
      location: "Seattle, WA",
      occupation: "Software Developer",
      quote: "I need tools that help me stay organized and efficient."
    },
    behaviors: [
      {
        title: "Daily Usage",
        description: "Checks app multiple times per day",
        icon: <Clock className="text-blue-500" />
      },
      {
        title: "Feature Usage",
        description: "Heavy user of keyboard shortcuts",
        icon: <Star className="text-blue-500" />
      },
      {
        title: "Work Pattern",
        description: "Uses app primarily during work hours",
        icon: <Activity className="text-blue-500" />
      }
    ],
    goals: [
      "Improve productivity through better organization",
      "Reduce time spent on repetitive tasks",
      "Better collaboration with team members"
    ],
    painPoints: [
      "Current tools are too complex",
      "Lack of integration between different platforms",
      "Too many manual steps in workflow"
    ],
    journey: [
      {
        stage: "Discovery",
        emotion: "Curious",
        actions: "Researching solutions",
        expectations: "Easy to understand interface"
      },
      {
        stage: "First Use",
        emotion: "Excited",
        actions: "Setting up workspace",
        expectations: "Quick setup process"
      },
      {
        stage: "Regular Use",
        emotion: "Satisfied",
        actions: "Daily task management",
        expectations: "Reliable performance"
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="bg-white">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 rounded-full p-4">
              <User size={48} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{persona.basic.name}</h2>
              <div className="flex gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Briefcase size={16} />
                  {persona.basic.occupation}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {persona.basic.location}
                </span>
              </div>
            </div>
          </div>
          <p className="italic text-gray-600">"{persona.basic.quote}"</p>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="behaviors" className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="behaviors" className="flex items-center gap-2">
                <Activity size={16} />
                Behaviors
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target size={16} />
                Goals
              </TabsTrigger>
              <TabsTrigger value="painpoints" className="flex items-center gap-2">
                <AlertTriangle size={16} />
                Pain Points
              </TabsTrigger>
              <TabsTrigger value="journey" className="flex items-center gap-2">
                <Activity size={16} />
                Journey
              </TabsTrigger>
            </TabsList>

            <TabsContent value="behaviors">
              <div className="grid md:grid-cols-3 gap-4">
                {persona.behaviors.map((behavior, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {behavior.icon}
                      <h3 className="font-semibold">{behavior.title}</h3>
                    </div>
                    <p className="text-gray-600">{behavior.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals">
              <div className="space-y-3">
                {persona.goals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-2 bg-green-50 p-4 rounded-lg">
                    <Target className="text-green-600" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="painpoints">
              <div className="space-y-3">
                {persona.painPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2 bg-red-50 p-4 rounded-lg">
                    <AlertTriangle className="text-red-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="journey">
              <div className="space-y-4">
                {persona.journey.map((stage, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 p-4 rounded-lg"
                    onMouseEnter={() => setCurrentJourney(index)}
                  >
                    <h3 className="font-semibold text-blue-700">{stage.stage}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Emotion</p>
                        <p>{stage.emotion}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Actions</p>
                        <p>{stage.actions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Expectations</p>
                        <p>{stage.expectations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DynamicPersona;