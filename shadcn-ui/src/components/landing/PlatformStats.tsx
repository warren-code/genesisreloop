import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Recycle, 
  Users, 
  Briefcase, 
  Archive 
} from 'lucide-react';
import { getPlatformStats } from '@/lib/supabase';
import { PlatformStats as PlatformStatsType } from '@/types';

// Default statistics in case API fails
const defaultStats: PlatformStatsType = {
  value_chain_count: 100,
  active_node_count: 248,
  job_opportunity_count: 5720,
  waste_stream_count: 85
};

const PlatformStats = () => {
  const [stats, setStats] = useState<PlatformStatsType>(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await getPlatformStats();
        if (error) throw error;
        
        if (data) {
          setStats(data);
        }
      } catch (error) {
        console.error("Error fetching platform stats:", error);
        // Keep default stats if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    {
      icon: <Recycle className="h-12 w-12 text-teal-600" />,
      count: stats.value_chain_count,
      label: "Value Chains",
      description: "Documented circular economy processes"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      count: stats.active_node_count,
      label: "Active Nodes",
      description: "Community members implementing value chains"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-purple-600" />,
      count: stats.job_opportunity_count,
      label: "Job Opportunities",
      description: "Potential positions across the network"
    },
    {
      icon: <Archive className="h-12 w-12 text-amber-600" />,
      count: stats.waste_stream_count,
      label: "Waste Streams",
      description: "Different types of waste materials covered"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join our growing network of circular economy practitioners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-200 transition-all duration-300 hover:shadow-md overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
                      {loading ? (
                        <div className="w-20 h-12 bg-slate-200 rounded animate-pulse mx-auto"></div>
                      ) : (
                        item.count.toLocaleString()
                      )}
                    </span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
                      +
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;