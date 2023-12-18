"use client"

import DashboardLayout from "./dashboardLayout";

import CardOne from "./dashboardComponents/cards/cardOne";
import CardTwo from './dashboardComponents/cards/cardTwo';
import CardThree from './dashboardComponents/cards/cardThree';
import CardFour from './dashboardComponents/cards/cardFour';

import ChartOne from './dashboardComponents/charts/chartOne';
import ChartTwo from './dashboardComponents/charts/chartTwo';
import ChartThree from './dashboardComponents/charts/chartThree';

const DashboardDisplay = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {(typeof window !== 'undefined') &&
          <>
            <ChartOne />
            <ChartTwo />
            <ChartThree />
          </>
        }
      </div>
    </DashboardLayout>
  );
};

export default DashboardDisplay;
