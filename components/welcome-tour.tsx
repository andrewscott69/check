"use client";

import { useEffect, useState } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import { useSession } from "next-auth/react";

export function WelcomeTour() {
  const { data: session } = useSession();
  const [run, setRun] = useState(false);
  const [tourTaken, setTourTaken] = useState(false);

  useEffect(() => {
    // Check if user has taken the tour before
    const checkTourStatus = async () => {
      try {
        const response = await fetch("/api/user/tour-status");
        const data = await response.json();
        
        if (data.hasTakenTour) {
          setTourTaken(true);
        } else {
          // Start tour after a short delay
          setTimeout(() => {
            setRun(true);
          }, 1000);
        }
      } catch (error) {
        console.error("Error checking tour status:", error);
      }
    };

    if (session?.user) {
      checkTourStatus();
    }
  }, [session]);

  const handleJoyrideCallback = async (data: CallBackProps) => {
    const { status } = data;
    
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      
      // Mark tour as completed
      if (!tourTaken) {
        try {
          await fetch("/api/user/tour-completed", {
            method: "POST",
          });
          setTourTaken(true);
        } catch (error) {
          console.error("Error updating tour status:", error);
        }
      }
    }
  };

  const steps: Step[] = [
    {
      target: ".dashboard-overview",
      content: "Welcome to your BankApp dashboard! Here you can see an overview of your accounts and recent activity.",
      disableBeacon: true,
      placement: "bottom",
    },
    {
      target: ".crypto-cards-section",
      content: "This is where you can manage your cryptocurrency cards. Each card can hold one type of cryptocurrency.",
      placement: "bottom",
    },
    {
      target: ".create-card-button",
      content: "Click here to create a new cryptocurrency card. You can create different cards for different cryptocurrencies.",
      placement: "left",
    },
    {
      target: ".fund-card-button",
      content: "Use this button to add funds to your card using cryptocurrency.",
      placement: "bottom",
    },
    {
      target: ".transactions-section",
      content: "View your recent transactions here. You can see all your deposits and withdrawals.",
      placement: "top",
    },
    {
      target: ".user-nav",
      content: "Access your profile settings and account options from this menu.",
      placement: "bottom",
    },
  ];

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#4F46E5",
        },
      }}
    />
  );
}
