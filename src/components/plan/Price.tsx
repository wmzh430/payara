import useSWR from "swr"
import classNames from "classnames"

const fetcher = async (
  url: string,
  postData: { type: string; period: string }
) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
  return res.json()
}

export default function PlanPrice({
  type,
  isActived,
  period = "month",
}: {
  type: string
  isActived: boolean
  period?: "month" | "year"
}) {
  const { data: priceData, isLoading } = useSWR(
    `/api/price?type=${type}&period=${period}`,
    () => fetcher("/api/price", { type, period: period })
  )

  return (
    <div className="flex items-center gap-1 mt-2 mb-4">
      <h2 className="font-satoshi-bold text-xl">
        {isLoading ? "-" : `$${priceData}`}
      </h2>
      <span
        className={classNames("capitalize", {
          "text-gray-700 dark:text-gray-100": !isActived,
        })}
      >
        / {period}
      </span>
    </div>
  )
}
