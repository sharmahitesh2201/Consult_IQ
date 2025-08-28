
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, LightBulbIcon, CommandLineIcon, ChartBarIcon, PlayCircleIcon, ChatIcon } from '../constants';
import ContentCard from '../components/ContentCard';
import { SAMPLE_CASE_STUDIES, SAMPLE_FRAMEWORKS } from '../constants';


const StatCard: React.FC<{ 
  title: string; 
  value: string; 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string; 
  iconBgColor: string; 
  iconTextColor: string 
}> = ({ title, value, icon: IconComponent, color, iconBgColor, iconTextColor }) => (
  <div className={`bg-white p-5 sm:p-6 rounded-xl shadow-lg flex items-center space-x-4 border-l-4 ${color}`}>
    <div className={`p-3 rounded-full ${iconBgColor}`}>
        <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);


const DashboardPage: React.FC = () => {
  const quickLinks = [
    { name: 'Browse Cases', path: '/case-studies', icon: <BookOpenIcon className="w-8 h-8 text-red-600" />, description: "Explore real-world scenarios." },
    { name: 'Learn Frameworks', path: '/frameworks', icon: <LightBulbIcon className="w-8 h-8 text-red-600" />, description: "Master essential models." },
    { name: 'Practice Arena', path: '/practice-arena', icon: <CommandLineIcon className="w-8 h-8 text-red-600" />, description: "Hone your skills with AI." },
    { name: 'My Progress', path: '/my-progress', icon: <ChartBarIcon className="w-8 h-8 text-red-600" />, description: "Track your performance." },
  ];

  const featuredCase = SAMPLE_CASE_STUDIES.length > 0 ? SAMPLE_CASE_STUDIES[Math.floor(Math.random() * SAMPLE_CASE_STUDIES.length)] : null;
  const featuredFramework = SAMPLE_FRAMEWORKS.length > 0 ? SAMPLE_FRAMEWORKS[Math.floor(Math.random() * SAMPLE_FRAMEWORKS.length)] : null;


  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Welcome back to ConsultIQ!</h2>
        <p className="text-md sm:text-lg text-gray-600">Ready to tackle new challenges and sharpen your consulting prowess?</p>
      </div>

      {/* Stats Overview - Placeholder data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <StatCard 
            title="Cases Completed" 
            value="12" 
            icon={BookOpenIcon}
            color="border-red-500" 
            iconBgColor="bg-red-100"
            iconTextColor="text-red-600"
        />
        <StatCard 
            title="Frameworks Mastered" 
            value="5" 
            icon={LightBulbIcon}
            color="border-amber-500" 
            iconBgColor="bg-amber-100"
            iconTextColor="text-amber-600"
        />
        <StatCard 
            title="Practice Sessions" 
            value="8" 
            icon={CommandLineIcon}
            color="border-emerald-500" 
            iconBgColor="bg-emerald-100"
            iconTextColor="text-emerald-600"
        />
      </div>
      
      {/* Quick Links */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {quickLinks.map(link => (
            <Link key={link.name} to={link.path} className="block group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col justify-center items-center">
                <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-red-100 rounded-full inline-block transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-red-700">{link.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* Featured Content */}
      {(featuredCase || featuredFramework) && (
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Featured For You</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {featuredCase && <ContentCard resource={featuredCase} resourceType="case" />}
            {featuredFramework && <ContentCard resource={featuredFramework} resourceType="framework" />}
          </div>
        </div>
      )}

      {/* Call to Action for AI Coach */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 sm:p-8 rounded-xl shadow-xl text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
                <h3 className="text-2xl font-bold mb-2">Need Guidance?</h3>
                <p className="text-lg mb-4 md:mb-0">Our AI Coach is here to help you. Click the chat icon to start!</p>
            </div>
            <ChatIcon className="w-16 h-16 text-red-200 opacity-50 hidden md:block"/>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;