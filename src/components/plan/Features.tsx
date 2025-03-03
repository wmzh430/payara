import { CheckIcon, XIcon } from "lucide-react"
import Icon from "../Icon"
import { listData } from "../../config/data"
import classNames from "classnames"

export default function PlanFeatures({
  allowedItems,
  isActived,
}: {
  allowedItems: number
  isActived: boolean
}) {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {listData.map((feature: string, i: number) => (
        <div key={i} className="flex items-center gap-4">
          <Icon isActived={isActived} isDisabled={i + 1 > allowedItems}>
            {i + 1 > allowedItems ? (
              <XIcon className="w-4 h-4" />
            ) : (
              <CheckIcon className="w-4 h-4" />
            )}
          </Icon>
          <p
            className={classNames("flex-1", {
              "opacity-30": i + 1 > allowedItems,
            })}
          >
            {feature}
          </p>
        </div>
      ))}
    </div>
  )
}
