import React from 'react';
import { Calculator, Sun, Battery, Zap, ArrowLeftRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const tools = [
  {
    id: 'pv-calculator',
    name: 'PV Calculator',
    description: 'Calculate solar panel specifications, efficiency, and power output based on environmental conditions.',
    icon: <Calculator className="h-12 w-12 text-yellow-500" />,
    comingSoon: false,
    path: '/solar-tools/pv-calculator'
  },
  {
    id: 'sun-position',
    name: 'Sun Position Tracker',
    description: 'Track sun position and optimize solar panel placement for maximum energy capture throughout the day.',
    icon: <Sun className="h-12 w-12 text-yellow-500" />,
    comingSoon: true,
    path: '/solar-tools/sun-position'
  },
  {
    id: 'solar-power',
    name: 'Solar Power Calculator',
    description: 'Estimate potential solar power generation and savings based on your location and energy needs.',
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    comingSoon: true,
    path: '/solar-tools/solar-power'
  },
  {
    id: 'inverter-battery',
    name: 'Inverter Battery Calculator',
    description: 'Calculate battery capacity requirements and backup duration for your inverter system.',
    icon: <Battery className="h-12 w-12 text-yellow-500" />,
    comingSoon: true,
    path: '/solar-tools/inverter-battery'
  },
  {
    id: 'power-converter',
    name: 'Power (Energy) Converter',
    description: 'Convert between different units of power and energy measurements.',
    icon: <ArrowLeftRight className="h-12 w-12 text-yellow-500" />,
    comingSoon: true,
    path: '/solar-tools/power-converter'
  },
];

export default function SolarTools() {
  const navigate = useNavigate();

  const handleToolClick = (tool: typeof tools[0]) => {
    if (!tool.comingSoon) {
      navigate(tool.path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Solar Tools</span>
            </div>
            <Link to="/" className="text-gray-600 hover:text-yellow-500">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Solar Calculation Tools</h1>
          <p className="text-xl text-gray-300">Professional tools for solar power planning and calculations</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">{tool.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-center mb-6">{tool.description}</p>
              <button
                onClick={() => handleToolClick(tool)}
                className={`w-full py-3 px-6 rounded-md font-semibold transition-colors ${
                  tool.comingSoon
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }`}
                disabled={tool.comingSoon}
              >
                {tool.comingSoon ? 'Coming Soon' : 'Launch Calculator'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Bolty Technologies Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}