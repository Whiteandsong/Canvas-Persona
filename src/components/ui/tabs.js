import React, { useState } from 'react';

export function Tabs({ defaultValue, children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  const updatedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { activeTab, setActiveTab });
  });
  
  return <div>{updatedChildren}</div>;
}

export function TabsList({ children, activeTab, setActiveTab }) {
  const updatedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { activeTab, setActiveTab });
  });
  
  return <div className="flex space-x-2 mb-4">{updatedChildren}</div>;
}

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  return (
    <button
      className={`px-4 py-2 rounded ${activeTab === value ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, activeTab }) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}