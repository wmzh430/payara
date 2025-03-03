"use client"

import { useState } from "react"
import Title from "./Title"
import PricingCard from "./PricingCard"
import { planData } from "@/config/data"
import { IPlanData } from "@/config/interface"

export default function Dashboard() {
  const activeId = Number(
    Object.keys(planData).filter((id) => planData[Number(id)].isActive)[0]
  )
  const [currentPlan, setCurrentPlan] = useState<number>(activeId)

  return (
    <main>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-0 sm:gap-2 font-satoshi-bold">
        <Title type="heading" value="Powerful features for" />
        <Title type="heading-violet" value="powerful creators" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center mt-2 sm:mt-4">
        Choose a plan that&apos;s right for you
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 mt-12 sm:mt-16 lg:mt-20">
        {planData.map((plan: IPlanData, index: number) => (
          <PricingCard
            key={index}
            data={plan}
            index={index}
            activeId={activeId}
            currentPlan={currentPlan}
            setCurrentPlan={setCurrentPlan}
          />
        ))}
      </div>
    </main>
  )
}
