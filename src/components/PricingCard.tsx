import { useMemo } from "react"
import classNames from "classnames"
import PlanCardContainer from "./plan/Container"
import PlanPrice from "./plan/Price"
import PlanFeatures from "./plan/Features"
import Button from "./Button"
import { IPlanData } from "@/config/interface"

export default function PricingCard({
  data,
  index,
  activeId,
  currentPlan,
  setCurrentPlan,
}: {
  data: IPlanData
  index: number
  activeId: number
  currentPlan: number
  setCurrentPlan: (val: number) => void
}) {
  const isActivePlan = useMemo(
    () => index === currentPlan,
    [index, currentPlan]
  )

  return (
    <PlanCardContainer
      isActive={isActivePlan}
      onMouseEnter={() => setCurrentPlan(index)}
      onMouseLeave={() => setCurrentPlan(activeId)}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-l font-satoshi-medium">{data.title}</h2>
        <p
          className={classNames({
            "text-gray-700 dark:text-gray-100": !isActivePlan,
          })}
        >
          {data.content}
        </p>
        <PlanPrice type={data.title} isActived={isActivePlan} />
        <Button
          type={isActivePlan ? "primary" : "secondary"}
          label="Get Started Now"
        />
        <PlanFeatures
          allowedItems={data.allowedItems}
          isActived={isActivePlan}
        />
      </div>
    </PlanCardContainer>
  )
}
