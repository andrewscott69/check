"use client";

import React, { createContext, useContext, useState } from "react";

interface OnboardingData {
  phoneNumber: string;
  dob: string;
  nationality: string;
  occupation: string;
  employmentStatus: string;
  annualIncome: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  documentType?: string;
  frontImage?: string;
  backImage?: string;
  selfieImage?: string;
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateOnboardingData: (newData: Partial<OnboardingData>) => void;
  submitOnboardingData: () => Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    phoneNumber: "",
    dob: "",
    nationality: "",
    occupation: "",
    employmentStatus: "",
    annualIncome: "",
  });

  const updateOnboardingData = (newData: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({ ...prev, ...newData }));
  };

  const submitOnboardingData = async () => {
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(onboardingData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit onboarding data");
      }

      console.log("Onboarding complete!");
    } catch (error) {
      console.error("Onboarding error:", error);
    }
  };

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateOnboardingData, submitOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
