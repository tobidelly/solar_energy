import React, { useState } from 'react';
import { Calculator, ArrowLeft, Sun, CloudSun, Thermometer, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CalculationResult {
  dailyEnergy: number;
  panelsNeeded: number;
  systemSize: number;
  efficiency: number;
}

export default function PVCalculator() {
  const [formData, setFormData] = useState({
    dailyUsage: '',
    sunHours: '',
    temperature: '',
    shading: '0',
    panelWattage: '400',
    roofAngle: '30',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculatePV = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert inputs to numbers
    const dailyUsage = parseFloat(formData.dailyUsage);
    const sunHours = parseFloat(formData.sunHours);
    const temperature = parseFloat(formData.temperature);
    const shading = parseFloat(formData.shading);
    const panelWattage = parseFloat(formData.panelWattage);
    const roofAngle = parseFloat(formData.roofAngle);

    // Temperature efficiency calculation (panels lose efficiency as temperature increases)
    const tempEfficiencyLoss = (temperature - 25) * 0.004; // 0.4% loss per degree above 25°C
    const temperatureEfficiency = 1 - Math.max(0, tempEfficiencyLoss);

    // Shading efficiency (convert percentage to decimal)
    const shadingEfficiency = 1 - (shading / 100);

    // Angle efficiency (optimal at specified roof angle)
    const angleEfficiency = Math.cos((90 - roofAngle) * Math.PI / 180);

    // Calculate total system efficiency
    const totalEfficiency = temperatureEfficiency * shadingEfficiency * angleEfficiency;

    // Calculate daily energy needs with efficiency factors
    const dailyEnergyNeeded = dailyUsage / totalEfficiency;

    // Calculate required system size
    const systemSize = dailyEnergyNeeded / sunHours;

    // Calculate number of panels needed
    const panelsNeeded = Math.ceil((systemSize * 1000) / panelWattage);

    setResult({
      dailyEnergy: dailyEnergyNeeded,
      panelsNeeded: panelsNeeded,
      systemSize: systemSize,
      efficiency: totalEfficiency * 100
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">PV Calculator</span>
            </div>
            <Link to="/solar-tools" className="text-gray-600 hover:text-yellow-500 flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Tools
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Solar PV System Calculator</h2>
          
          <form onSubmit={calculatePV} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Daily Energy Usage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Energy Usage (kWh)
                </label>
                <div className="relative">
                  <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.1"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.dailyUsage}
                    onChange={(e) => setFormData({ ...formData, dailyUsage: e.target.value })}
                    placeholder="e.g., 20"
                  />
                </div>
              </div>

              {/* Peak Sun Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Peak Sun Hours per Day
                </label>
                <div className="relative">
                  <Sun className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    required
                    min="0"
                    max="24"
                    step="0.1"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.sunHours}
                    onChange={(e) => setFormData({ ...formData, sunHours: e.target.value })}
                    placeholder="e.g., 5.5"
                  />
                </div>
              </div>

              {/* Average Temperature */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Temperature (°C)
                </label>
                <div className="relative">
                  <Thermometer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    required
                    min="-20"
                    max="60"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.temperature}
                    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                    placeholder="e.g., 25"
                  />
                </div>
              </div>

              {/* Shading Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shading (%)
                </label>
                <div className="relative">
                  <CloudSun className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    value={formData.shading}
                    onChange={(e) => setFormData({ ...formData, shading: e.target.value })}
                    placeholder="e.g., 10"
                  />
                </div>
              </div>

              {/* Panel Wattage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Solar Panel Wattage (W)
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.panelWattage}
                  onChange={(e) => setFormData({ ...formData, panelWattage: e.target.value })}
                >
                  <option value="300">300W</option>
                  <option value="400">400W</option>
                  <option value="500">500W</option>
                  <option value="600">600W</option>
                </select>
              </div>

              {/* Roof Angle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roof Angle (degrees)
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.roofAngle}
                  onChange={(e) => setFormData({ ...formData, roofAngle: e.target.value })}
                >
                  <option value="0">0° (Flat)</option>
                  <option value="15">15°</option>
                  <option value="30">30° (Recommended)</option>
                  <option value="45">45°</option>
                  <option value="60">60°</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
            >
              Calculate System Requirements
            </button>
          </form>

          {/* Results Section */}
          {result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calculation Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-gray-600">Required Daily Energy</p>
                  <p className="text-2xl font-bold text-yellow-600">{result.dailyEnergy.toFixed(2)} kWh</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-gray-600">Number of Panels Needed</p>
                  <p className="text-2xl font-bold text-yellow-600">{result.panelsNeeded} panels</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-gray-600">System Size</p>
                  <p className="text-2xl font-bold text-yellow-600">{result.systemSize.toFixed(2)} kW</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <p className="text-gray-600">System Efficiency</p>
                  <p className="text-2xl font-bold text-yellow-600">{result.efficiency.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}