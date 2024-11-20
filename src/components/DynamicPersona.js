import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import EmmaAvatar from '../assets/emma.png';  // 确保图片路径正确
import { 
  User, 
  Activity, 
  Target, 
  AlertTriangle, 
  MapPin,
  Briefcase,
  Clock,
  Star,
  Laptop,
  Mail,
  FileText,
  Calendar,
  LayoutDashboard,
  FolderOpen,
  Calculator
} from 'lucide-react';

const DynamicPersona = () => {
  const [currentWorkflow, setCurrentWorkflow] = useState(0);
  
  const persona = {
    basic: {
      name: "Emma Tran",
      age: 20,
      location: "UC Irvine",
      occupation: "Computer Science Student",
      year: "Junior",
      quote: "I rely on Canvas to keep my academic life in sync, but sometimes it feels like I'm debugging my own schedule."
    },
    bio: "Emma Tran, a UC Irvine junior, has used Canvas since high school. While she relies on it daily for assignments, calendars, and course materials, she struggles with its inconsistent interfaces and calendar syncing issues. She wants a more organized experience that reduces the time spent managing notifications and locating assignments. Her main goal is to streamline her Canvas workflow, allowing her to focus better on her studies and maintain effective communication with professors and classmates.",
    behaviors: [
      {
        title: "Daily Usage",
        description: "Checks Canvas daily for assignments, calendar and course materials",
        icon: <Clock className="text-blue-500" />
      },
      {
        title: "Device Preference",
        description: "Primarily uses laptop for accessing Canvas",
        icon: <Laptop className="text-blue-500" />
      },
      {
        title: "Communication",
        description: "Prefers Gmail for professor communication, minimal Canvas inbox usage",
        icon: <Mail className="text-blue-500" />
      }
    ],
    highlightedFeatures: [
      {
        title: "Calendar",
        description: "Primary tool for deadline tracking and task management across all courses",
        icon: <Calendar className="text-purple-500" />
      },
      {
        title: "Dashboard",
        description: "Central hub for quick access to assignments, announcements, and recent course updates",
        icon: <LayoutDashboard className="text-purple-500" />
      },
      {
        title: "Modules Tab",
        description: "Essential for accessing organized course content and maintaining weekly study progress",
        icon: <FolderOpen className="text-purple-500" />
      },
      {
        title: "Grade Calculator",
        description: "Valuable for academic progress monitoring, despite occasional setup inconsistencies",
        icon: <Calculator className="text-purple-500" />
      }
    ],
    goals: [
      "Efficient Assignment Tracking: Track and manage deadlines across all courses",
      "Organized Course Materials: Consistend and standardized organization across different classes",
      "Streamlined Communication: Manage course discussions and announcements for easily accessible communications",
      "Controlled Notifications: Prioritize critical updates while reducing unnecessary distractions"
    ],
    frustrations: [
      "Inconsistent Course Page Layouts: Finding materials sometimes is difficult",
      "Calendar Sync Issues: Causing potential missed deadlines",
      "Overwhelming notifications: Making it harder to identify crucial messages",
      "Video Upload Porblems: Limited video upload capacity requiring YouTube workarounds"
    ],
    dailyWorkflow: [
      {
        stage: "Morning",
        status: "Engaged",
        activities: "Checks To-Do list and Calendar for upcoming assignments",
        goals: "Clear overview of daily tasks"
      },
      {
        stage: "Midday",
        status: "Focused",
        activities: "Works on assignments, reviews lecture notes and materials",
        goals: "Complete scheduled work"
      },
      {
        stage: "Evening",
        status: "Productive",
        activities: "Updates personal calendar and marks completed tasks",
        goals: "Efficient task tracking and organization"
      }
    ]
  };
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="bg-white">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img 
                src={EmmaAvatar} 
                alt="Emma Tran" 
                className="w-full h-full object-cover"
              />
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
          <Tabs defaultValue="bio" className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="bio" className="flex items-center gap-2">
                <FileText size={16} />
                Bio
              </TabsTrigger>
              <TabsTrigger value="behaviors" className="flex items-center gap-2">
                <Activity size={16} />
                Behaviors
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <Star size={16} />
                Features
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target size={16} />
                Goals
              </TabsTrigger>
              <TabsTrigger value="frustrations" className="flex items-center gap-2">
                <AlertTriangle size={16} />
                Frustrations
              </TabsTrigger>
              <TabsTrigger value="workflow" className="flex items-center gap-2">
                <Clock size={16} />
                Daily Workflow
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bio">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {persona.bio}
                  </p>
                </div>
              </div>
            </TabsContent>

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

            <TabsContent value="features">
              <div className="grid md:grid-cols-3 gap-4">
                {persona.highlightedFeatures.map((feature, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {feature.icon}
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
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

            <TabsContent value="frustrations">
              <div className="space-y-3">
                {persona.frustrations.map((point, index) => (
                  <div key={index} className="flex items-center gap-2 bg-red-50 p-4 rounded-lg">
                    <AlertTriangle className="text-red-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workflow">
              <div className="space-y-4">
                {persona.dailyWorkflow.map((stage, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 p-4 rounded-lg"
                    onMouseEnter={() => setCurrentWorkflow(index)}
                  >
                    <h3 className="font-semibold text-blue-700">{stage.stage}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <p>{stage.status}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Activities</p>
                        <p>{stage.activities}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Goals</p>
                        <p>{stage.goals}</p>
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